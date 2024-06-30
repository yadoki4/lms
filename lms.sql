-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2024 at 11:52 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lms`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE `activity` (
  `ActivityID` int(11) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Description` text DEFAULT NULL,
  `Points` int(11) DEFAULT NULL,
  `DueDate` date DEFAULT NULL,
  `Type` varchar(50) NOT NULL,
  `Instructions` longtext NOT NULL,
  `TeacherID` int(11) NOT NULL,
  `Week` int(11) NOT NULL,
  `LessonID` int(11) DEFAULT NULL,
  `Outcome` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`ActivityID`, `Title`, `Description`, `Points`, `DueDate`, `Type`, `Instructions`, `TeacherID`, `Week`, `LessonID`, `Outcome`) VALUES
(109, 'Introduction to Python', 'Overview of Python programming language.', 10, '2024-05-09', 'Inactive', 'Watch the introductory video on Python.', 4, 1, 1, 'Understand the basics of Python.'),
(110, 'Python Syntax', 'Learn basic Python syntax.', 10, '2024-05-08', 'Inactive', 'Complete the exercises on Python syntax.', 4, 1, 1, 'Be able to write basic Python code.'),
(111, 'Variables and Data Types', 'Understand variables and data types in Python.', 10, '2024-08-09', 'Active', 'Practice with different data types in Python.', 4, 2, 1, 'Understand and use different data types.'),
(112, 'Basic I/O', 'Learn how to take input and produce output in Python.', 10, '2024-07-12', 'Active', 'Write a Python program to take user input and display output.', 4, 2, 1, 'Implement basic I/O operations in Python.'),
(113, 'Control Structures', 'Learn about control structures in Python.', 10, '2024-06-08', 'Inactive', 'Read the chapter on control structures in Python.', 4, 3, 1, 'Understand if-else, loops, and other control structures.'),
(114, 'If-Else Statements', 'Practice if-else statements in Python.', 10, '2024-07-06', 'Active', 'Solve problems using if-else statements.', 4, 3, 1, 'Be able to implement decision-making in Python.'),
(115, 'For Loops', 'Learn about for loops in Python.', 10, '2024-07-07', 'Active', 'Complete the for loop exercises.', 4, 4, 1, 'Use for loops to iterate over sequences.'),
(116, 'While Loops', 'Understand while loops in Python.', 10, '2024-07-08', 'Active', 'Write a Python program using while loops.', 4, 4, 1, 'Implement iterative processes with while loops.'),
(117, 'Data Structures in Python', 'Overview of data structures in Python.', 10, '2024-07-09', 'Active', 'Review the slides on data structures.', 4, 1, 2, 'Understand the use of various data structures.'),
(118, 'Lists', 'Learn about lists in Python.', 10, '2024-07-10', 'Active', 'Complete list manipulation exercises.', 4, 1, 2, 'Perform operations on lists.'),
(119, 'Tuples', 'Understand tuples in Python.', 10, '2024-07-11', 'Active', 'Practice with tuple operations.', 4, 2, 2, 'Use tuples for fixed collections of items.'),
(120, 'Dictionaries', 'Learn about dictionaries in Python.', 10, '2024-07-12', 'Active', 'Write a program using dictionaries.', 4, 2, 2, 'Implement key-value pairs using dictionaries.'),
(121, 'Sets', 'Explore set operations in Python.', 10, '2024-07-13', 'Active', 'Solve exercises using sets.', 4, 3, 2, 'Utilize sets for unique collections of items.'),
(122, 'Advanced Data Structures', 'Delve into more advanced data structures.', 10, '2024-07-14', 'Active', 'Read about stacks and queues.', 4, 3, 2, 'Understand and implement stacks and queues.'),
(123, 'Data Structure Algorithms', 'Implement algorithms with data structures.', 10, '2024-07-15', 'Active', 'Complete algorithm-based exercises.', 4, 4, 2, 'Apply algorithms to various data structures.'),
(124, 'Data Structure Projects', 'Apply data structures in a project.', 10, '2024-07-16', 'Active', 'Develop a project using different data structures.', 4, 4, 2, 'Demonstrate the use of multiple data structures in a project.'),
(125, 'Functions in Python', 'Introduction to functions in Python.', 10, '2024-07-17', 'Active', 'Read about defining and calling functions.', 4, 1, 3, 'Understand how to create and use functions.'),
(126, 'Defining Functions', 'Learn how to define functions.', 10, '2024-07-18', 'Active', 'Define functions to solve problems.', 4, 1, 3, 'Be able to define functions with parameters.'),
(127, 'Lambda Functions', 'Understand lambda functions.', 10, '2024-07-19', 'Active', 'Practice with lambda functions.', 4, 2, 3, 'Use lambda expressions for short functions.'),
(128, 'Recursion', 'Learn about recursive functions.', 10, '2024-07-20', 'Active', 'Implement a recursive function.', 4, 2, 3, 'Solve problems using recursion.'),
(129, 'Function Arguments', 'Different types of function arguments.', 10, '2024-07-21', 'Active', 'Review the use of default, keyword, and arbitrary arguments.', 4, 3, 3, 'Utilize different types of function arguments.'),
(130, 'Function Return Values', 'Handling return values from functions.', 10, '2024-07-22', 'Active', 'Practice returning multiple values from functions.', 4, 3, 3, 'Return and use multiple values from functions.'),
(131, 'Higher-Order Functions', 'Understanding higher-order functions.', 10, '2024-07-23', 'Active', 'Read about functions as first-class citizens.', 4, 4, 3, 'Use functions that take other functions as arguments or return them.'),
(132, 'Function Projects', 'Apply functions in a comprehensive project.', 10, '2024-07-24', 'Active', 'Create a project using various types of functions.', 4, 4, 3, 'Integrate functions into a larger project.'),
(133, 'OOP in Python', 'Introduction to OOP in Python.', 10, '2024-07-05', 'Active', 'Review the principles of OOP.', 4, 1, 4, 'Understand the basics of OOP.'),
(134, 'Classes and Objects', 'Learn about classes and objects.', 10, '2024-07-04', 'Active', 'Create and use classes and objects.', 4, 1, 4, 'Be able to define classes and create objects.'),
(135, 'Inheritance', 'Understand inheritance in Python.', 10, '2024-07-27', 'Active', 'Implement inheritance in a Python program.', 4, 2, 4, 'Use inheritance to create a class hierarchy.'),
(136, 'Polymorphism', 'Learn about polymorphism.', 10, '2024-07-28', 'Active', 'Demonstrate polymorphism in a program.', 4, 2, 4, 'Implement polymorphism in Python.'),
(137, 'Encapsulation', 'Understand encapsulation.', 10, '2024-07-29', 'Active', 'Read about access modifiers and encapsulation.', 4, 3, 4, 'Use encapsulation to protect data within objects.'),
(138, 'Abstract Classes and Interfaces', 'Learn about abstract classes and interfaces.', 10, '2024-07-30', 'Active', 'Implement abstract classes and interfaces.', 4, 3, 4, 'Use abstract classes and interfaces in design.'),
(139, 'OOP Design Principles', 'Study design principles in OOP.', 10, '2024-07-31', 'Active', 'Review SOLID principles.', 4, 4, 4, 'Apply SOLID principles to OOP design.'),
(140, 'OOP Projects', 'Apply OOP concepts in a project.', 10, '2024-08-01', 'Active', 'Develop a project using OOP.', 4, 4, 4, 'Demonstrate OOP concepts in a real-world project.'),
(141, 'File Handling in Python', 'Introduction to file handling.', 10, '2024-08-02', 'Active', 'Read the chapter on file handling.', 4, 1, 5, 'Understand file operations.'),
(142, 'Reading Files', 'Learn how to read files.', 10, '2024-08-03', 'Active', 'Write a program to read from a file.', 4, 1, 5, 'Be able to read data from files.'),
(143, 'Writing Files', 'Understand writing to files.', 10, '2024-08-04', 'Active', 'Practice writing data to files.', 4, 2, 5, 'Write data to files.'),
(144, 'File Handling Projects', 'Apply file handling in projects.', 10, '2024-08-05', 'Active', 'Complete a project involving file handling.', 4, 2, 5, 'Implement file handling in a real-world scenario.'),
(145, 'Working with CSV Files', 'Learn how to handle CSV files.', 10, '2024-08-06', 'Active', 'Review methods to read and write CSV files.', 4, 3, 5, 'Handle CSV file operations in Python.'),
(146, 'Handling JSON Files', 'Work with JSON files.', 10, '2024-08-07', 'Active', 'Practice reading and writing JSON data.', 4, 3, 5, 'Read and write JSON files.'),
(147, 'Binary File Operations', 'Understand binary file handling.', 10, '2024-08-08', 'Active', 'Read about binary file operations.', 4, 4, 5, 'Handle binary files in Python.'),
(148, 'File Handling Best Practices', 'Learn best practices in file handling.', 10, '2024-08-09', 'Active', 'Implement best practices in a project.', 4, 4, 5, 'Apply best practices in file handling.'),
(149, 'Error Handling in Python', 'Introduction to error handling.', 10, '2024-08-10', 'Active', 'Review the error handling mechanisms in Python.', 4, 1, 6, 'Understand how to handle errors.'),
(150, 'Exception Handling', 'Practice exception handling.', 10, '2024-08-11', 'Active', 'Implement exception handling in programs.', 4, 1, 6, 'Be able to use try-except blocks.'),
(151, 'Custom Exceptions', 'Learn to create custom exceptions.', 10, '2024-08-12', 'Active', 'Define and use custom exception classes.', 4, 2, 6, 'Implement custom exceptions.'),
(152, 'Logging', 'Understand logging in Python.', 10, '2024-08-13', 'Active', 'Add logging to a Python program.', 4, 2, 6, 'Use logging to track program execution.'),
(153, 'Error Handling Best Practices', 'Study best practices in error handling.', 10, '2024-08-14', 'Active', 'Review best practices for handling errors.', 4, 3, 6, 'Apply best practices in error handling.'),
(154, 'Debugging Techniques', 'Learn debugging techniques.', 10, '2024-08-15', 'Active', 'Practice debugging a Python program.', 4, 3, 6, 'Use debugging techniques to identify issues.'),
(155, 'Error Handling Projects', 'Apply error handling in a project.', 10, '2024-08-16', 'Active', 'Develop a project with comprehensive error handling.', 4, 4, 6, 'Implement robust error handling in a project.'),
(156, 'Exception Handling in Depth', 'Advanced exception handling techniques.', 10, '2024-08-17', 'Active', 'Practice with advanced exception handling.', 4, 4, 6, 'Use advanced techniques for handling exceptions.'),
(157, 'Advanced Python Topics', 'Introduction to advanced Python topics.', 10, '2024-08-18', 'Active', 'Overview of advanced Python topics.', 4, 1, 7, 'Understand advanced concepts in Python.'),
(158, 'Generators', 'Learn about generators in Python.', 10, '2024-08-19', 'Active', 'Implement generators to handle large datasets.', 4, 1, 7, 'Use generators for memory-efficient data handling.'),
(159, 'Decorators', 'Understand decorators.', 10, '2024-08-20', 'Active', 'Practice creating and using decorators.', 4, 2, 7, 'Use decorators to modify functions or methods.'),
(160, 'Context Managers', 'Learn about context managers.', 10, '2024-08-21', 'Active', 'Implement context managers using with statements.', 4, 2, 7, 'Use context managers for resource management.'),
(161, 'Concurrency and Parallelism', 'Explore concurrency and parallelism.', 10, '2024-08-22', 'Active', 'Review threading and multiprocessing.', 4, 3, 7, 'Implement concurrency and parallelism in Python.'),
(162, 'Async Programming', 'Understand asynchronous programming.', 10, '2024-08-23', 'Active', 'Practice with async and await.', 4, 3, 7, 'Use asynchronous programming for I/O-bound tasks.'),
(163, 'Advanced Libraries', 'Study advanced Python libraries.', 10, '2024-08-24', 'Active', 'Explore libraries like NumPy, Pandas, etc.', 4, 4, 7, 'Use advanced libraries for data manipulation and analysis.'),
(164, 'Final Project', 'Complete a final project.', 20, '2024-08-25', 'Active', 'Develop a comprehensive Python application.', 4, 4, 7, 'Apply all concepts learned in a final project.'),
(166, 'tEACHER 4 act title', 'tEACHER 4 act Description\n', 12, '2024-06-11', 'Inactive', 'Instructions\n', 5, 1, 1, '\nInstructions\n\nLearning Outcome'),
(167, 'activ 2', 'Description', 10, '2024-06-12', 'Inactive', 'Instructions', 5, 1, 1, '\nLearning Outcome\n');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `AdminID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`AdminID`, `Name`, `Email`, `Password`) VALUES
(1, 'Talha', 'admin@gmail.com', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `AttendanceID` int(11) NOT NULL,
  `StudentID` int(11) DEFAULT NULL,
  `TeacherID` int(11) NOT NULL,
  `Week` int(11) NOT NULL,
  `Status` varchar(20) NOT NULL,
  `ManualOverride` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`AttendanceID`, `StudentID`, `TeacherID`, `Week`, `Status`, `ManualOverride`) VALUES
(11700, 5, 4, 1, 'A', NULL),
(11701, 33, 4, 1, 'A', NULL),
(11702, 6, 4, 1, 'A', NULL),
(11703, 34, 4, 1, 'A', NULL),
(11704, 8, 4, 1, 'P', NULL),
(11705, 35, 4, 1, 'A', NULL),
(11706, 36, 4, 1, 'A', NULL),
(11707, 37, 4, 1, 'A', NULL),
(11708, 38, 4, 1, 'A', NULL),
(11709, 7, 4, 1, 'A', NULL),
(11710, 39, 4, 1, 'A', NULL),
(11711, 40, 4, 1, 'A', NULL),
(11712, 41, 4, 1, 'A', NULL),
(11713, 42, 4, 1, 'A', NULL),
(11714, 43, 4, 1, 'A', NULL),
(11715, 44, 4, 1, 'A', NULL),
(11716, 45, 4, 1, 'A', NULL),
(11717, 46, 4, 1, 'A', NULL),
(11718, 47, 4, 1, 'A', NULL),
(11719, 48, 4, 1, 'A', NULL),
(11720, 49, 4, 1, 'A', NULL),
(11721, 50, 4, 1, 'A', NULL),
(11722, 51, 4, 1, 'A', NULL),
(11723, 52, 4, 1, 'A', NULL),
(11724, 53, 4, 1, 'A', NULL),
(11725, 54, 4, 1, 'A', NULL),
(11726, 55, 4, 1, 'A', NULL),
(11727, 56, 4, 1, 'A', NULL),
(11728, 62, 4, 1, 'A', NULL),
(11729, 63, 4, 1, 'A', NULL),
(11730, 64, 4, 1, 'A', NULL),
(11731, 65, 4, 1, 'A', NULL),
(11732, 5, 4, 1, 'A', NULL),
(11733, 6, 4, 1, 'A', NULL),
(11734, 7, 4, 1, 'A', NULL),
(11735, 8, 4, 1, 'P', NULL),
(11736, 33, 4, 1, 'A', NULL),
(11737, 34, 4, 1, 'A', NULL),
(11738, 35, 4, 1, 'A', NULL),
(11739, 36, 4, 1, 'A', NULL),
(11740, 37, 4, 1, 'A', NULL),
(11741, 38, 4, 1, 'A', NULL),
(11742, 39, 4, 1, 'A', NULL),
(11743, 40, 4, 1, 'A', NULL),
(11744, 41, 4, 1, 'A', NULL),
(11745, 42, 4, 1, 'A', NULL),
(11746, 43, 4, 1, 'A', NULL),
(11747, 44, 4, 1, 'A', NULL),
(11748, 45, 4, 1, 'A', NULL),
(11749, 46, 4, 1, 'A', NULL),
(11750, 47, 4, 1, 'A', NULL),
(11751, 48, 4, 1, 'A', NULL),
(11752, 49, 4, 1, 'A', NULL),
(11753, 50, 4, 1, 'A', NULL),
(11754, 51, 4, 1, 'A', NULL),
(11755, 52, 4, 1, 'A', NULL),
(11756, 53, 4, 1, 'A', NULL),
(11757, 54, 4, 1, 'A', NULL),
(11758, 55, 4, 1, 'A', NULL),
(11759, 56, 4, 1, 'A', NULL),
(11760, 62, 4, 1, 'A', NULL),
(11761, 63, 4, 1, 'A', NULL),
(11762, 64, 4, 1, 'A', NULL),
(11767, 66, 5, 1, 'A', NULL),
(11770, 65, 5, 1, 'A', NULL),
(11771, 62, 5, 1, 'A', NULL),
(11772, 64, 5, 1, 'A', NULL),
(11773, 63, 5, 1, 'A', NULL),
(11774, 72, 5, 1, 'A', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `ClassID` int(11) NOT NULL,
  `ClassNo` int(255) NOT NULL,
  `Total_Students` int(2) DEFAULT NULL,
  `TeacherID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`ClassID`, `ClassNo`, `Total_Students`, `TeacherID`) VALUES
(1, 1, 30, 4),
(3, 2, 30, 5),
(10, 3, 30, 3),
(11, 4, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `homework`
--

CREATE TABLE `homework` (
  `HomeworkID` int(11) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Description` text DEFAULT NULL,
  `Points` int(11) DEFAULT NULL,
  `Week` varchar(50) DEFAULT NULL,
  `DueDate` date DEFAULT NULL,
  `ClassID` int(11) DEFAULT NULL,
  `Type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lessons`
--

CREATE TABLE `lessons` (
  `LessonID` int(11) NOT NULL,
  `LessonName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lessons`
--

INSERT INTO `lessons` (`LessonID`, `LessonName`) VALUES
(1, 'Introduction to Python'),
(2, 'Functions and Modules'),
(3, 'Data Structures Part 1'),
(4, 'Data Structures Part 2'),
(5, 'File Handling and Exception Handling'),
(6, 'Intermediate Topics'),
(7, 'Project Development Part 1');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `StudentID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `Guardian` varchar(40) DEFAULT NULL,
  `SubscriptionStatus` tinyint(1) NOT NULL DEFAULT 0,
  `ClassID` int(11) DEFAULT NULL,
  `Profile` text DEFAULT NULL,
  `TeacherID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`StudentID`, `Name`, `Email`, `Password`, `Phone`, `Guardian`, `SubscriptionStatus`, `ClassID`, `Profile`, `TeacherID`) VALUES
(5, 'Dan', 'talha.kh58@gmail.com', '$2a$10$IklmL1B6Y0pLThEPt5cx5.yZWRzNIRADkI9.CTUSUlwjLxt65lTTa', '+13459567049', 'John Doe', 0, 1, NULL, 4),
(6, 'Kane', 'talha.kh5@gmail.com', '$2a$10$OSBfHSe.4vkAsyhwNxNtu.8g2Mc7EguwixPjbsXbc.X4Pd87mmw/C', '+16156440336', 'Jane Smith', 0, 1, NULL, 4),
(7, 'Jim', 'talha.kh48@gmail.com', '$2a$10$pShWn6e5pk2IoxpO85t35Oisc.q0Paq7Bjp0bubdGGEkSkniVrb0K', '+10075081614', 'John Doe', 0, 1, NULL, 4),
(8, 'Talha Farooq', 'talha.kh1@gmail.com', '$2a$10$Xj4bRZ3r86ZRFT6r9vaVFOwrEf5fmPeZ3elM6oWOOCvPc9raMXWyC', '+14730758485', 'Muhammad Farooq', 0, 1, NULL, 4),
(33, 'Student 1', 'student1@example.com', 'password1', '+19624311495', 'Jane Smith', 0, 1, NULL, 4),
(34, 'Student 2', 'student2@example.com', 'password2', '+16285521896', 'Emily Williams', 0, 1, NULL, 4),
(35, 'Student 3', 'student3@example.com', 'password3', '+12437482804', 'Jane Smith', 0, 1, NULL, 4),
(36, 'Student 4', 'student4@example.com', 'password4', '+17905693992', 'Jane Smith', 0, 1, NULL, 4),
(37, 'Student 5', 'student5@example.com', 'password5', '+18590696350', 'John Doe', 0, 1, NULL, 4),
(38, 'Student 6', 'student6@example.com', 'password6', '+10193854738', 'John Doe', 0, 1, NULL, 4),
(39, 'Student 7', 'student7@example.com', 'password7', '+18396904066', 'Michael Johnson', 0, 1, NULL, 4),
(40, 'Student 8', 'student8@example.com', 'password8', '+18327175144', 'John Doe', 0, 1, NULL, 4),
(41, 'Student 9', 'student9@example.com', 'password9', '+12136028159', 'Emily Williams', 0, 1, NULL, 4),
(42, 'Student 10', 'student10@example.com', 'password10', '+17138353555', 'Michael Johnson', 0, 1, NULL, 4),
(43, 'Student 11', 'student11@example.com', 'password11', '+10017030062', 'Emily Williams', 0, 1, NULL, 4),
(44, 'Student 12', 'student12@example.com', 'password12', '+10499806022', 'Michael Johnson', 0, 1, NULL, 4),
(45, 'Student 13', 'student13@example.com', 'password13', '+13075956760', 'Michael Johnson', 0, 1, NULL, 4),
(46, 'Student 14', 'student14@example.com', 'password14', '+15583737246', 'Michael Johnson', 0, 1, NULL, 4),
(47, 'Student 15', 'student15@example.com', 'password15', '+18555323713', 'Emily Williams', 0, 1, NULL, 4),
(48, 'Student 16', 'student16@example.com', 'password16', '+12254704220', 'John Doe', 0, 1, NULL, 4),
(49, 'Student 17', 'student17@example.com', 'password17', '+16745441236', 'Jane Smith', 0, 1, NULL, 4),
(50, 'Student 18', 'student18@example.com', 'password18', '+11633076296', 'Michael Johnson', 0, 1, NULL, 4),
(51, 'Student 19', 'student19@example.com', 'password19', '+19645695658', 'Jane Smith', 0, 1, NULL, 4),
(52, 'Student 20', 'student20@example.com', 'password20', '+10563933868', 'Jane Smith', 0, 1, NULL, 4),
(53, 'Student 21', 'student21@example.com', 'password21', '+17898789437', 'Jane Smith', 0, 1, NULL, 4),
(54, 'Student 22', 'student22@example.com', 'password22', '+13678868444', 'Michael Johnson', 0, 1, NULL, 4),
(55, 'Student 23', 'student23@example.com', 'password23', '+16925500442', 'John Doe', 0, 1, NULL, 4),
(56, 'Student 24', 'student24@example.com', 'password24', '+11148498608', 'Jane Smith', 0, 1, NULL, 4),
(62, 'Student 30', 'student30@example.com', 'password30', NULL, NULL, 0, 3, NULL, 5),
(63, 'Student 31', 'student31@example.com', 'password31', NULL, NULL, 0, 3, NULL, 5),
(64, 'Student 32', 'student32@example.com', 'password32', NULL, NULL, 0, 3, NULL, 5),
(65, 'Student 33', 'student33@example.com', 'password33', NULL, NULL, 0, 3, NULL, 5),
(66, 'Student 34', 'student34@example.com', 'password34', NULL, NULL, 0, 3, NULL, 5),
(72, 'Talha', 'talha.kh8@gmail.com', '$2a$10$3jrG2zUML1DPa4HNHVUmhuqql/g4WUAr2F6x.yulf9pfNAxM7/U4i', NULL, NULL, 0, 3, NULL, 5),
(73, 'Talha Khawaja', 'talha.kh511@gmail.com', '$2a$10$xNBt3vGvJm4hnaVxu7SvVu4nD6k2d4qhX9m4OIDREiC51HmH/xwC6', NULL, NULL, 0, 10, NULL, 3),
(76, 'user2', 'user3@gmail.com', '$2a$10$JoqHoUnZdgkbgWgUSFE56eS6WmTkXTFiTKYoAQlCmcQbjT4xID5A.', NULL, NULL, 0, 11, NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `submittedactivity`
--

CREATE TABLE `submittedactivity` (
  `s_activityID` int(11) NOT NULL,
  `ActivityID` int(11) NOT NULL,
  `StudentID` int(11) NOT NULL,
  `TeacherID` int(11) NOT NULL,
  `Week` int(11) NOT NULL,
  `Grades` int(11) NOT NULL DEFAULT 0,
  `FilePath` varchar(255) NOT NULL,
  `Subm_Date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `submittedactivity`
--

INSERT INTO `submittedactivity` (`s_activityID`, `ActivityID`, `StudentID`, `TeacherID`, `Week`, `Grades`, `FilePath`, `Subm_Date`) VALUES
(12, 109, 8, 4, 1, 1, 'Abd.pdf', 'June 16, 2024'),
(14, 110, 8, 4, 1, 0, 'Ubicraft.pdf', 'June 16, 2024'),
(15, 116, 8, 4, 4, 0, 'Resume_Abdul.pdf', 'June 16, 2024'),
(16, 117, 8, 4, 5, 0, 'Ubicraft.pdf', 'June 16, 2024'),
(17, 118, 8, 4, 5, 0, 'Screenshot 2024-06-16 013438.png', 'June 16, 2024'),
(18, 133, 8, 4, 13, 0, 'Screenshot 2024-06-16 013438.png', 'June 16, 2024');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `TeacherID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `ApplicationStatus` tinyint(1) NOT NULL DEFAULT 0,
  `Profile` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`TeacherID`, `Name`, `Email`, `Password`, `ApplicationStatus`, `Profile`) VALUES
(2, 'Talha Farooq', 'talha.kh8@gmail.com', '$2a$10$nUqx/TKKRuWJFDy/KIZsPuKqlkopmsExxSRyI1IDZdiCNl.sXtXsi', 1, NULL),
(3, 'Umer', 'talha.kh111@gmail.com', '$2a$10$4obzu.mgPgjKbfXkaN7U1OLU0lQZTtrGZYEexlL7zAhYtf31fbVg.', 1, NULL),
(4, 'Hassan', 'tk2@gmail.com', '$2a$10$CKHEJomfr59a2qOgpnzykedGubwFReHqbRpAq339cohlNPnsxV0KK', 1, NULL),
(5, 'Talha ', 'talha.kh28@gmail.com', '$2a$10$uLDadwm.gvU9sb2m7LTTlunX7Y0wJrytbMSRWODfnxW.wqlERfAvy', 1, NULL),
(6, 'talha', 'talha.kh522@gmail.com', '$2a$10$YlD5BzKVXr0Q/onnfxmhduUpFe21zJxaYSBimdUtecNtObDoUvusu', 1, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD UNIQUE KEY `ActivityID` (`ActivityID`),
  ADD KEY `activity_ibfk_1` (`TeacherID`),
  ADD KEY `fk_lesson` (`LessonID`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`AdminID`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`AttendanceID`),
  ADD KEY `StudentID` (`StudentID`);

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`ClassID`);

--
-- Indexes for table `homework`
--
ALTER TABLE `homework`
  ADD PRIMARY KEY (`HomeworkID`),
  ADD KEY `ClassID` (`ClassID`);

--
-- Indexes for table `lessons`
--
ALTER TABLE `lessons`
  ADD PRIMARY KEY (`LessonID`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`StudentID`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD KEY `ClassID` (`ClassID`);

--
-- Indexes for table `submittedactivity`
--
ALTER TABLE `submittedactivity`
  ADD PRIMARY KEY (`s_activityID`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`TeacherID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity`
--
ALTER TABLE `activity`
  MODIFY `ActivityID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=168;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `AdminID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `AttendanceID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11775;

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `ClassID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `lessons`
--
ALTER TABLE `lessons`
  MODIFY `LessonID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `StudentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `submittedactivity`
--
ALTER TABLE `submittedactivity`
  MODIFY `s_activityID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `TeacherID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activity`
--
ALTER TABLE `activity`
  ADD CONSTRAINT `activity_ibfk_1` FOREIGN KEY (`TeacherID`) REFERENCES `teacher` (`TeacherID`),
  ADD CONSTRAINT `fk_lesson` FOREIGN KEY (`LessonID`) REFERENCES `lessons` (`LessonID`);

--
-- Constraints for table `attendance`
--
ALTER TABLE `attendance`
  ADD CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`StudentID`) REFERENCES `student` (`StudentID`);

--
-- Constraints for table `homework`
--
ALTER TABLE `homework`
  ADD CONSTRAINT `homework_ibfk_1` FOREIGN KEY (`ClassID`) REFERENCES `class` (`ClassID`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`ClassID`) REFERENCES `class` (`ClassID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
