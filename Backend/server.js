const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Database configuration
const dbOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

const db = mysql.createConnection(dbOptions);

db.connect(err => {
  if (err) throw err;
  console.log('Database connected!');
});

// Session store configuration
const sessionStore = new MySQLStore(dbOptions);

app.use(cookieParser());
app.use(session({
  key: 'session_cookie_name',
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    secure: false, // Set to true if using https
    httpOnly: true,
  }
}));

// // Middleware to log session details
// app.use((req, res, next) => {
//   console.log('Session ID:', req.session.id);
//   console.log('Session Data:', req.session);
//   next();
// });



// Signup Route
app.post('/api/auth/signup', async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(`Received signup request with role: ${role}`);

  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  if (role === 'student') {
    // Start a transaction
    db.beginTransaction((err) => {
      if (err) {
        console.error('Error starting transaction:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }

      // Step 1: Select a class where Current is false and Total_Students < 30
      const selectClassQuery = 'SELECT ClassID, Total_Students FROM class WHERE Total_Students < 30 LIMIT 1';
      db.query(selectClassQuery, (err, classResults) => {
        if (err) {
          console.log(classResults);
          console.error('Error selecting class:', err);
          return db.rollback(() => {
            res.status(500).json({ message: 'Error selecting class' })
          });
        }

        if (classResults.length === 0) {
          // No available class found or all classes are full, create a new class
          const countClassesQuery = 'SELECT COUNT(*) AS totalClasses FROM class';
          db.query(countClassesQuery, (err, countResults) => {
            if (err) {
              console.error('Error counting classes:', err);
              return db.rollback(() => {
                res.status(500).json({ message: 'Error counting classes' });
              });
            }

            const totalClasses = countResults[0].totalClasses;
            const newClassNo = totalClasses + 1;

            const insertClassQuery = 'INSERT INTO class (ClassNo, Total_Students) VALUES (?, ?)';
            db.query(insertClassQuery, [newClassNo, 1], (err, insertClassResults) => {
              if (err) {
                console.error('Error creating new class:', err);
                return db.rollback(() => {
                  res.status(500).json({ message: 'Error creating new class' });
                });
              }

              const newClassID = insertClassResults.insertId;

              // Insert the new student record with the assigned ClassID
              const insertStudentQuery = 'INSERT INTO student (Name, Email, Password, ClassID) VALUES (?, ?, ?, ?)';
              db.query(insertStudentQuery, [name, email, hashedPassword, newClassID], (err, insertResults) => {
                if (err) {
                  console.error('Error creating student:', err);
                  return db.rollback(() => {
                    res.status(500).json({ message: 'Error creating student' });
                  });
                }

                // Commit the transaction
                db.commit((err) => {
                  if (err) {
                    console.error('Error committing transaction:', err);
                    return db.rollback(() => {
                      res.status(500).json({ message: 'Error committing transaction' });
                    });
                  }

                  res.status(201).json({ message: 'Student created successfully', ClassID: newClassID });
                });
              });
            });
          });
        } else {
          // Available class found, update Total_Students
          const { ClassID, Total_Students } = classResults[0];
          const newTotalStudents = Total_Students + 1;

          const updateClassQuery = 'UPDATE class SET Total_Students = ? WHERE ClassID = ?';
          db.query(updateClassQuery, [newTotalStudents, ClassID], (err, updateResults) => {
            if (err) {
              console.error('Error updating class:', err);
              return db.rollback(() => {
                res.status(500).json({ message: 'Error updating class' });
              });
            }

            // Insert the new student record with the assigned ClassID
            const insertStudentQuery = 'INSERT INTO student (Name, Email, Password, ClassID) VALUES (?, ?, ?, ?)';
            db.query(insertStudentQuery, [name, email, hashedPassword, ClassID], (err, insertResults) => {
              if (err) {
                console.error('Error creating student:', err);
                return db.rollback(() => {
                  res.status(500).json({ message: 'Error creating student' });
                });
              }

              // Commit the transaction
              db.commit((err) => {
                if (err) {
                  console.error('Error committing transaction:', err);
                  return db.rollback(() => {
                    res.status(500).json({ message: 'Error committing transaction' });
                  });
                }

                res.status(201).json({ message: 'Student created successfully', ClassID });
              });
            });
          });
        }
      });
    });
  } else if (role === 'teacher') {
    const insertTeacherQuery = 'INSERT INTO teacher (Name, Email, Password) VALUES (?, ?, ?)';
    db.query(insertTeacherQuery, [name, email, hashedPassword], (err, results) => {
      if (err) {
        console.error('Error creating teacher:', err);
        res.status(500).json({ message: 'Error creating teacher' });
      } else {
        res.status(201).json({ message: 'Teacher created successfully' });
      }
    });
  } else {
    res.status(400).json({ message: 'Invalid role specified' });
  }
});




// Login Route
app.post('/api/auth/login', (req, res) => {
  const { email, password, role } = req.body;
  console.log(`Received signin request with role: ${role}`);
  if (!email || !password || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const table = role === 'student' ? 'student' : role === 'teacher' ? 'teacher' : role === 'admin' ? 'admin' : null;
  console.log(table);
  if (!table) {
    return res.status(400).json({ message: 'Invalid role specified' });
  }

  const query = `SELECT * FROM ${table} WHERE Email = ?`;

  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error logging in' });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const user = results[0];
    console.log(user);

    if (role === 'admin') {
      // Admin password check (assumes plain text for demonstration purposes)
      if (password !== user.Password) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
    } else {
      const isMatch = await bcrypt.compare(password, user.Password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password' });
      }
    }

    if (role === 'teacher' && user.ApplicationStatus === 0) {
      return res.status(400).json({ message: 'Request pending for approval' });
    }

    req.session.user = user;
    req.session.userRole = role;
    req.session.LoggedIn = true;

    req.session.save(err => {
      if (err) {
        console.error('Session save error:', err);
        return res.status(500).json({ message: 'Error saving session' });
      }
      res.status(200).json({ message: 'Login successful', user });
    });
  });
});

//Route To authenticate User if already Logged in
app.post('/api/auth', (req, res) => {
  if(req.session.LoggedIn){
    res.send({ message: "Authenticated" , user: req.session.user, userRole: req.session.userRole });
  }
  else{
    res.send({ message: "Not Authenticated"});
  } 
});


// Logout Route
app.post('/api/auth/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.clearCookie('session_cookie_name');
    res.send({ message: 'Logout successful' });
  });
});


// Route to fetch class data based on TeacherID sent in header
app.post('/api/classes', (req, res) => {
  const teacherId = req.headers.authorization.replace('Bearer ', ''); // Extract teacherId from Authorization header

  const query = `SELECT * FROM class WHERE TeacherID = ?`;  // Adjust table name and columns as necessary

  db.query(query, [teacherId], (err, results) => {
    if (err) {
      console.error('Error fetching class data:', err);
      res.status(500).json({ error: 'Failed to fetch class data' });
    } else {
      res.json(results);
    }
  });
});

// Route to fetch Allclass with teacherName
app.post('/api/Allclasses', (req, res) => {
  const query = `
    SELECT class.*, teacher.Name as TeacherName
    FROM class
    LEFT JOIN teacher ON class.TeacherID = teacher.TeacherID;
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching class data:', err);
      res.status(500).json({ error: 'Failed to fetch class data' });
    } else {
      res.json(results);
    }
  });
});



app.post('/api/createactivity', (req, res) => {
  const { title, description, instructions, points, dueDate, teacherId, week, lesson, Outcome } = req.body;

  const query = 'INSERT INTO activity (Title, Description, Points, DueDate, Type, Instructions, TeacherID, Week, LessonID, Outcome) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.execute(query, [title, description, points, dueDate, "Active", instructions, teacherId, week, lesson, Outcome], (err, results) => {
    if (err) {
      console.error('Error saving activity:', err);
      res.status(500).send('Error saving activity');
      return;
    }
    res.status(201).send('Activity saved successfully');
  });
});


app.get('/api/activities/:TeacherID', (req, res) => {
  const { TeacherID } = req.params;
  const query = `SELECT * FROM activity WHERE TeacherID = ?`;
  db.query(query, [TeacherID], (err, results) => {
    if (err) {
      console.error('Error fetching activities:', err);
      res.status(500).send('Error fetching activities');
      return;
    }
    const activitiesByLesson = results.reduce((acc, activity) => {
      const LessonID = activity.LessonID;
      if (!acc[LessonID]) {
        acc[LessonID] = [];
      }
      acc[LessonID].push(activity);
      return acc;
    }, {});
    res.status(200).json(activitiesByLesson);
  });
});


// Endpoint to get all lessons
app.get('/api/lessons', (req, res) => {
  const query = 'SELECT * FROM lessons';
  db.execute(query, (err, results) => {
    if (err) {
      console.error('Error fetching lessons:', err);
      res.status(500).send('Error fetching lessons');
      return;
    }
    res.status(200).json(results);
  });
});


// Endpoint to get all Students based on TeacherID
app.get('/api/students/:TeacherID', (req, res) => {
  const { TeacherID } = req.params;
  const query = 'SELECT * FROM student WHERE TeacherID = ?';
  db.execute(query, [TeacherID], (err, results) => {
    if (err) {
      console.error('Error fetching students:', err);
      res.status(500).send('Error fetching students');
      return;
    }

    res.status(200).json(results);
  });
});


// Endpoint to get all Students
app.get('/api/allstudents', (req, res) => {
  const query = 'SELECT * FROM student';
  db.execute(query, (err, results) => {
    if (err) {
      console.error('Error fetching students:', err);
      res.status(500).send('Error fetching students');
      return;
    }

    res.status(200).json(results);
  });
});

// // Endpoint to get all approved teachers 
// app.get('/api/allteachers', (req, res) => {
//   const query = 'SELECT * FROM teacher WHERE ApplicationStatus = 1';
//   db.execute(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching students:', err);
//       res.status(500).send('Error fetching students');
//       return;
//     }

//     res.status(200).json(results);
//   });
// });

// Route to fetch all teachers with class count
app.get('/api/allteachers', (req, res) => {
  const query = `
    SELECT t.*, COUNT(c.ClassID) as classCount 
    FROM teacher t 
    LEFT JOIN class c ON t.TeacherID = c.TeacherID 
    WHERE t.ApplicationStatus = 1
    GROUP BY t.TeacherID
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching teachers:', err);
      res.status(500).json({ error: 'Failed to fetch teachers' });
    } else {
      res.json(results);
    }
  });
});


// Route to assign a teacher to a class and update student table
app.post('/api/assignteacher', (req, res) => {
  const { classId, teacherId } = req.body;

  if (!classId || !teacherId) {
    return res.status(400).json({ error: 'Class ID and Teacher ID are required' });
  }

  const updateClassQuery = 'UPDATE class SET TeacherID = ? WHERE ClassID = ?';
  const updateStudentQuery = 'UPDATE student SET TeacherID = ? WHERE ClassID = ?';

  // Start a transaction
  db.beginTransaction(err => {
    if (err) {
      console.error('Error starting transaction:', err);
      return res.status(500).json({ error: 'Failed to start transaction' });
    }

    // Update class table
    db.query(updateClassQuery, [teacherId, classId], (err, result) => {
      if (err) {
        console.error('Error assigning teacher to class:', err);
        return db.rollback(() => {
          res.status(500).json({ error: 'Failed to assign teacher to class' });
        });
      }

      // Update student table
      db.query(updateStudentQuery, [teacherId, classId], (err, result) => {
        if (err) {
          console.error('Error updating students with teacher ID:', err);
          return db.rollback(() => {
            res.status(500).json({ error: 'Failed to update students with teacher ID' });
          });
        }

        // Commit the transaction
        db.commit(err => {
          if (err) {
            console.error('Error committing transaction:', err);
            return db.rollback(() => {
              res.status(500).json({ error: 'Failed to commit transaction' });
            });
          }

          res.status(200).json({ message: 'Teacher assigned successfully and students updated' });
        });
      });
    });
  });
});



// Endpoint to get all requests for teachers 
app.get('/api/teachersrequests', (req, res) => {
  const query = 'SELECT * FROM teacher WHERE ApplicationStatus = 0';
  db.execute(query, (err, results) => {
    if (err) {
      console.error('Error fetching students:', err);
      res.status(500).send('Error fetching students');
      return;
    }

    res.status(200).json(results);
  });
});

// Endpoint to approve a teacher's request
app.patch('/api/approveTeacher/:TeacherID', (req, res) => {
  const { TeacherID } = req.params;
  const updateQuery = 'UPDATE teacher SET ApplicationStatus = 1 WHERE TeacherID = ?';

  db.execute(updateQuery, [TeacherID], (err, results) => {
    if (err) {
      console.error('Error updating teacher status:', err);
      res.status(500).send('Error updating teacher status');
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).send('Teacher not found');
      return;
    }

    res.status(200).send('Teacher approved successfully');
  });
});


// Endpoint to fetch activity statuses
app.get('/api/activitystatus/:TeacherID', (req, res) => {
  const {TeacherID} = req.params;
  const query = `
    WITH ActivityCounts AS (
    SELECT LessonID, Week, COUNT(*) AS TotalActivities,
          SUM(CASE WHEN Type = 'Inactive' THEN 1 ELSE 0 END) AS InactiveCount
    FROM activity WHERE TeacherID = ?
    GROUP BY LessonID, Week
  )
  SELECT ac.LessonID, ac.Week, ac.TotalActivities, ac.InactiveCount,
        CASE
          WHEN ac.InactiveCount = 0 THEN 'All Active'
          WHEN ac.InactiveCount = ac.TotalActivities THEN 'All Inactive'
          ELSE 'Mixed'
        END AS ActivityStatus
  FROM ActivityCounts ac
  WHERE ac.InactiveCount = ac.TotalActivities
  ORDER BY ac.LessonID, ac.Week;

  `;
  
  db.execute(query, [TeacherID], (err, results) => {
    if (err) {
      console.error('Error fetching activity statuses:', err);
      res.status(500).send('Error fetching activity statuses');
      return;
    }
    console.log(results);
    res.status(200).json(results);
  });
});


// Endpoint to fetch submitted activities
app.post('/api/submitted-all-activities/:TeacherID', (req, res) => {
  const { weekNumber, totalActivities, studentId } = req.body;
  const { TeacherID } = req.params;
  const teacherIDInt = parseInt(TeacherID, 10);

  const query = `
    SELECT ActivityID, StudentID, Week
    FROM submittedactivity
    WHERE StudentID = ? AND Week = ?;
  `;

  db.query(query, [studentId, weekNumber], (err, results) => {
    if (err) {
      console.error('Error fetching submitted activities:', err);
      res.status(500).send('Error fetching submitted activities');
      return;
    }

    const submittedActivities = results.length;
    const submissionPercentage = (submittedActivities / totalActivities) * 100;

    let status;
    if (submissionPercentage >= 80) {
      status = 'P';
    } else if (submissionPercentage >= 50) {
      status = 'M';
    } else {
      status = 'A';
    }

    // Check if the attendance entry already exists
    const checkQuery = `
      SELECT * FROM attendance 
      WHERE StudentID = ? AND TeacherID = ? AND Week = ?;
    `;
    db.query(checkQuery, [studentId, teacherIDInt, weekNumber], (err, checkResults) => {
      if (err) {
        console.error('Error checking attendance entry:', err);
        res.status(500).send('Error checking attendance entry');
        return;
      }

      if (checkResults.length > 0) {
        // Entry exists, update it
        const updateQuery = `
          UPDATE attendance 
          SET Status = ? 
          WHERE StudentID = ? AND TeacherID = ? AND Week = ?;
        `;
        db.query(updateQuery, [status, studentId, teacherIDInt, weekNumber], (err, updateResults) => {
          if (err) {
            console.error('Error updating attendance status:', err);
            res.status(500).send('Error updating attendance status');
            return;
          }
          res.status(200).send({ weekNumber, studentId, status });
        });
      } else {
        // Entry does not exist, insert it
        const insertQuery = `
          INSERT INTO attendance (StudentID, TeacherID, Week, Status)
          VALUES (?, ?, ?, ?);
        `;
        db.query(insertQuery, [studentId, teacherIDInt, weekNumber, status], (err, insertResults) => {
          if (err) {
            console.error('Error inserting attendance entry:', err);
            res.status(500).send('Error inserting attendance entry');
            return;
          }
          res.status(200).send({ weekNumber, studentId, status });
        });
      }
    });
  });
});



app.get('/api/lessons/:lessonId/activities', (req, res) => {
  const { lessonId } = req.params;
  const { teacherId } = req.query;
  
  const query = 'SELECT * FROM activity WHERE LessonID = ? AND TeacherID = ?';
  db.execute(query, [lessonId, teacherId], (err, results) => {
    if (err) {
      console.error('Error fetching activities:', err);
      res.status(500).send('Error fetching activities');
      return;
    }
    res.status(200).json(results);
  });
});



// Endpoint to fetch activities, update Type if DueDate is passed
app.post('/api/activities/updateStatus', (req, res) => {
  const currentDate = new Date().toISOString().split('T')[0]; // Current date in 'YYYY-MM-DD' format

  // Fetch activities and update Type to 'Inactive' if DueDate is passed
  const sql = `UPDATE activity SET Type = 'Inactive' WHERE DueDate < '${currentDate}'`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error updating activities:', err);
      res.status(500).send('Error updating activities');
    } else {

      res.status(200).send(`Activities updated successfully: ${result.affectedRows} rows affected`);
    }
  });
});


// Endpoint to fetch teacher data by teacherID
app.get('/api/teacher/:teacherID', (req, res) => {
  const { teacherID } = req.params;
  const query = 'SELECT * FROM teacher WHERE teacherID = ?';

  db.execute(query, [teacherID], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data');
      return;
    }

    if (results.length === 0) {
      res.status(404).send('Teacher not found');
      return;
    }
    res.status(200).json(results[0]);
  });
});


// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname); // Use original file name here
  }
});

const upload = multer({ storage: storage });

// Middleware to serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());


// POST route to handle file upload
app.post('/api/upload', upload.single('file'), (req, res) => {
  const { studentID, teacherID, activityID, Week, LessonID, currentDate } = req.body;
  const file = req.file;

  if (!file) {
      return res.status(400).send('No file uploaded.');
  }

  const filePath = file.originalname; // Use original file name

  const query = 'INSERT INTO submittedactivity (StudentID, TeacherID, ActivityID, Week, FilePath, Subm_Date) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [studentID, teacherID, activityID, Week, filePath, currentDate ], (err, result) => {
      if (err) {
          console.error(err);
          return res.status(500).send('Failed to save submission to database.');
      }
      res.send('File uploaded and data saved successfully.');
  });
});


// backend endpoint to fetch submitted activities with activity titles
app.get('/api/submitted-activities', (req, res) => {
  const studentID = req.query.StudentID; // Assuming you pass studentID as a query parameter

  const query = `
      SELECT s.ActivityID, s.*,  a.Title AS ActivityTitle, s.Grades
      FROM submittedactivity s
      INNER JOIN activity a ON s.ActivityID = a.ActivityID
      WHERE s.StudentID = ?
  `;

  db.query(query, [studentID], (err, results) => {
      if (err) {
          console.error('Error fetching submitted activities:', err);
          return res.status(500).send('Failed to fetch submitted activities.');
      }
      res.json(results); // Assuming results is an array of submitted activities with titles
  });
});


// backend endpoint to fetch review submissions with student name and file path
app.get('/api/review-submissions', (req, res) => {
  const teacherID = req.query.teacherID; // Assuming you pass teacherID as a query parameter

  const query = `
      SELECT s.s_activityID, s.ActivityID, s.StudentID, s.FilePath, s.Subm_Date,
             st.Name AS StudentName, a.Title AS ActivityTitle
      FROM submittedactivity s
      INNER JOIN student st ON s.StudentID = st.StudentID
      INNER JOIN activity a ON s.ActivityID = a.ActivityID
      WHERE s.TeacherID = ?
  `;

  db.query(query, [teacherID], (err, results) => {
      if (err) {
          console.error('Error fetching review submissions:', err);
          return res.status(500).send('Failed to fetch review submissions.');
      }
      res.json(results); // Assuming results is an array of review submissions with required details
  });
});


// Example backend endpoint to update award points for a submission
app.put('/api/review-submissions/:submissionID/award-points', (req, res) => {
  const submissionID = req.params.submissionID;
  const { awardPoints } = req.body; // Assuming awardPoints is sent in the request body

  const query = `
      UPDATE submittedactivity
      SET Grades = ?
      WHERE s_activityID = ?
  `;

  db.query(query, [awardPoints, submissionID], (err, result) => {
      if (err) {
          console.error('Error updating award points:', err);
          return res.status(500).send('Failed to update award points.');
      }
      res.sendStatus(200); // Send success response
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
