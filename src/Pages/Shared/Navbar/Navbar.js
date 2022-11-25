import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../Assets/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import swal from "sweetalert";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        swal("Logout successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-[#2c3e50] text-white py-2 md:py-7 ">
      <nav className="flex px-2 justify-between items-center ">
        <section className="text-2xl text-white ">
          <Link to="/" className="flex justify-evenly items-center">
            <div className="">
              {" "}
              <img src={logo} className="w-12 h-12 rounded-full mr-3" alt="" />
            </div>
            <div className="ml-6">
              {" "}
              <h2 className=" font-serif">SBSWAP</h2>
            </div>
          </Link>
        </section>
        <section
          className={` nav text-2xl  justify-end text-white flex flex-col-reverse md:flex-row md:items-center md:text-black  gap-x-6 p-2 w-full text-center bg-[#2c3e50] md:text-right md:static absolute right-[1px] md:right-0  top-16 duration-1000 ease-in-out ${
            open ? "top-12 " : "top-[-520px]"
          }`}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "md:active bg-blue-800 text-white font-semibold rounded-md p-1"
                : "hover:text-neutral-400 text-white hover:font-semibold hover:text-2xl"
            }
            to="/courses"
          >
            Courses
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "md:active bg-blue-800 text-white font-semibold rounded-md p-1"
                : "hover:text-neutral-400 text-white hover:font-semibold hover:text-2xl"
            }
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "md:active bg-blue-800 text-white font-semibold rounded-md p-1"
                : "hover:text-neutral-400 text-white hover:font-semibold hover:text-2xl"
            }
            to="/faq"
          >
            FAQ
          </NavLink>

          {user && user?.uid ? (
            <>
              <NavLink
                onClick={handleLogout}
                className="hover:text-neutral-400 text-white hover:font-semibold hover:text-2xl"
              >
                Logout
              </NavLink>
              <NavLink className=" text-neutral-400">
                {user.displayName}
              </NavLink>
              <NavLink>
                {user?.photoURL ? (
                  <label
                    tabIndex={0}
                    className="btn m-1 inline-block
                     cursor-pointer"
                  >
                    <img
                      title={user?.displayName}
                      className="w-12 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  </label>
                ) : (
                  <label tabIndex={0} className="btn m-1 cursor-pointer">
                    <img
                      title={user?.displayName}
                      className="w-12 rounded-full"
                      src="https://www.spica-siam.com/wp-content/uploads/2017/12/user-demo.png"
                      alt=""
                    />
                  </label>
                )}
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "md:active bg-blue-800 text-white font-semibold rounded-md "
                    : "hover:text-neutral-400  text-white hover:font-semibold hover:text-2xl"
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "md:active bg-blue-800 text-white font-semibold rounded-md p-1"
                    : "hover:text-green-500  text-slate-400 hover:font-semibold hover:text-2xl"
                }
                to="/register"
              >
                Register
              </NavLink>
            </>
          )}
        </section>

        {/* hamburger menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="h-8 w-6 cursor-pointer md:hidden "
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
