import { FaCaretDown, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdLocationPin, MdOutlineMessage } from "react-icons/md";
import logoImg from "../../src/assets/logofinal.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../Hooks/UseAdmin";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [data] = useAdmin();

  const menuNev = (
    <>
      <li>
        <Link className="font-DM font-medium text-lg text-gray-800 hover:text-blue-600 transition">
          Home
        </Link>
      </li>

      {user && (
        <li>
          <Link
            to={"deshboard"}
            className="font-DM font-medium text-lg text-gray-800 hover:text-blue-600 transition"
          >
            {data?.admin ? <p>Admin Dashboard</p> : <p>User Dashboard</p>}
          </Link>
        </li>
      )}

      {user && (
        <li>
          <Link
            to={"/alltestpage"}
            className="font-DM font-medium text-lg text-gray-800 hover:text-blue-600 transition"
          >
            All Tests
          </Link>
        </li>
      )}
      {user && (
        <li>
          <Link
            to={"/products"}
            className="font-DM font-medium text-lg text-gray-800 hover:text-blue-600 transition"
          >
            Products
          </Link>
        </li>
      )}

      <li>
        <Link
          to={"/abouts"}
          className="font-DM font-medium text-lg text-gray-800 hover:text-blue-600 transition"
        >
          About
        </Link>
      </li>

      <li>
        <Link
          to={"/contact"}
          className="font-DM font-medium text-lg text-gray-800 hover:text-blue-600 transition"
        >
          Contact
        </Link>
      </li>
    </>
  );

  const handleLogoutBtn = () => {
    logout()
      .then(() => {
        // Handle success
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* Top Navbar */}
      <div className="bg-[#1F5FFF] p-3 hidden lg:block">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <p className="flex items-center gap-3 text-white font-medium">
              <span className="p-1 border-2 border-white rounded-full text-white text-xl">
                <IoIosCall />
              </span>
              <span>Phone: 01727993241</span>
            </p>
            <p className="flex items-center gap-3 text-white font-medium">
              <span className="p-1 border-2 border-white rounded-full text-white text-xl">
                <MdOutlineMessage />
              </span>
              <span>Phone: 01727993241</span>
            </p>
            <p className="flex items-center gap-3 text-white font-medium">
              <span className="p-1 border-2 border-white rounded-full text-white text-xl">
                <MdLocationPin />
              </span>
              <span>Phone: 01727993241</span>
            </p>
          </div>
          <div>
            <div className="flex gap-5 items-center">
              <p className="font-medium text-white flex gap-2 items-center">
                <span>Language</span>
                <span className="text-white font-bold">
                  <FaCaretDown />
                </span>
              </p>

              <p className="font-medium text-white flex gap-2 items-center">
                Follow:
                <span>
                  <FaFacebook />
                </span>
                <span>
                  <FaInstagram />
                </span>
                <span>
                  <FaLinkedin />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="relative">
        <div className="w-full mx-auto items-center">
          <div className="navbar mx-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 w-52"
                >
                  {menuNev}
                </ul>
              </div>
              <div className="z-10 py-3">
                <img src={logoImg} alt="Logo" />
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{menuNev}</ul>
            </div>
            <div className="navbar-end flex items-center gap-2">
              <Link to={"/singup"}>
                <button className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                  Sign Up
                </button>
              </Link>
              {user ? (
                <>
                  <button
                    onClick={handleLogoutBtn}
                    className="bg-gradient-to-b from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to={"/login"}>
                    <button className="bg-gradient-to-b from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                      Login
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
