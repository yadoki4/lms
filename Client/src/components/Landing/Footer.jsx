import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import logo from "./Color-1.png"

const Footer = () => {
  const [content4, setcontent4] = useState(false);
  return (
    <footer className="bg-white text-black-1  mt-16 px-16 py-16">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between">
        {/* Address and Social Links */}
        <div className="flex flex-1 flex-wrap md:flex-nowrap">
          {/* Company Address */}
          <div className="w-full md:w-auto mb-6 md:mb-0 md:mr-12">
            <img src={logo} alt="" width={50} height={50} />
          </div>
          {/* Social Links */}
          <div>
            <ul>
              <li>
                <a href="https://facebook.com" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="hover:underline">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Up Arrow and Contact Info */}
        <div className="flex flex-1 flex-wrap justify-end items-start md:items-center ">
          {/* Up Arrow */}

          {/* Contact Info */}
          <div className="text-right">
            <div>Email: contact@ourcompany.com</div>
            <div>Phone: (123) 456-7890</div>
          </div>
          <div className="mb-6 md:mb-0">
            <button
              onClick={() => {
                //seticon(!icon);
                setcontent4(!content4);
              }}
              className={`${
                content4 ? "bg-orange-logo text-white" : "bg-white"
              } w-[46px] h-[46px] flex font-poppins font-medium text-[#FB8500]  rounded-full  justify-center items-center `}
            >
              {content4 ? (
                <img src="/assets/uparrowfooter.svg"></img>
              ) : (
                <IoIosArrowForward />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Rights Reserved */}
      <div className="text-center mt-6 md:text-right md:mt-0">
        © 2024 Our Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
