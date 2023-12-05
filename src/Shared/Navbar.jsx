import React, { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/lineup">Lineup</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/campaign">Camping</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/FAQs">FAQ</NavLink>
      </li>
    </>
  );
  return (
    <div className="container mx-auto top-0 sticky mt-4 text-white bg-[#090925] z-50  rounded-full px-4">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-[#0F2441] rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <img
              className="max-w-[130px]"
              src="https://i.ibb.co/fnPjWMz/Asset-1.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex items-center gap-5">
                <div className="drawer drawer-end">
                  <input
                    id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content">
                    {/* Page content here */}
                    <label
                      htmlFor="my-drawer-4"
                      className="drawer-button cursor-pointer"
                    >
                      <img
                        src={user.photoURL}
                        className="w-14 h-14 rounded-full border-2 border-white"
                        alt=""
                      />
                    </label>
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-4"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 space-y-2 text-center w-50 rounded-lg mt-24 bg-blue-950 text-base-content">
                      {/* Sidebar content here */}
                      <li className="text-xl font-bold text-white">
                        {user.displayName}
                      </li>
                      <li className="font-semibold text-white">{user.email}</li>
                      <li className="mx-auto">
                        <button
                          onClick={handleLogOut}
                          className="bg-sky-600 hover:bg-sky-700 hover:text-white font-bold w-32 flex justify-center text-white"
                        >
                          <FaSignOutAlt className="text-xl" />
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-6 py-2 font-semibold bg-blue-700 hover:bg-blue-800 rounded-full"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
