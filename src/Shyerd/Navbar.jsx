import { FaCaretDown, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdLocationPin, MdOutlineMessage } from "react-icons/md";
import logoImg from "../../src/assets/logofinal.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../Hooks/UseAdmin";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [data] = useAdmin();

  const menuNev = (
    <>
      <li>
        <Link
          to="/"
          className="font-DM font-medium text-lg text-gray-800 hover:text-blue-600 transition"
          style={{ backgroundColor: "transparent" }}
        >
          Home
        </Link>
      </li>

      {user && (
        <li>
          <Link
            to={"deshboard"}
            className="font-DM font-medium text-lg text-gray-800 hover:text-blue-600 transition"
            style={{ backgroundColor: "transparent" }}
          >
            {data?.admin ? "Admin Dashboard" : "User Dashboard"}
          </Link>
        </li>
      )}

      {user && (
        <li>
          <Link
            to={"/alltestpage"}
            className="font-DM font-medium text-lg text-gray-800 hover:text-blue-600 transition"
            style={{ backgroundColor: "transparent" }}
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
            style={{ backgroundColor: "transparent" }}
          >
            Products
          </Link>
        </li>
      )}

      <li>
        <Link
          to={"/abouts"}
          className="font-DM font-medium text-lg text-gray-800 hover:text-blue-600 transition"
          style={{ backgroundColor: "transparent" }}
        >
          About
        </Link>
      </li>

      <li>
        <Link
          to={"/contact"}
          className="font-DM font-medium text-lg text-gray-800 hover:text-blue-600 transition"
          style={{ backgroundColor: "transparent" }}
        >
          Contact
        </Link>
      </li>
    </>
  );

  const handleLogoutBtn = () => {
    logout()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error(error.message || "Logout failed");
      });
  };

  return (
    <div style={{ colorScheme: "light" }}>
      {/* Top Navbar */}
      <div className="bg-[#1F5FFF] p-3 hidden lg:block">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
          <div className="flex gap-3">
            <p className="flex items-center gap-2 text-white font-medium">
              <span className="p-1 border-2 border-white rounded-full text-white text-xl">
                <IoIosCall />
              </span>
              <span>Phone: 01727993241</span>
            </p>
            <p className="flex items-center gap-2 text-white font-medium">
              <span className="p-1 border-2 border-white rounded-full text-white text-xl">
                <MdOutlineMessage />
              </span>
              <span>Email: info@example.com</span>
            </p>
            <p className="flex items-center gap-2 text-white font-medium">
              <span className="p-1 border-2 border-white rounded-full text-white text-xl">
                <MdLocationPin />
              </span>
              <span>Dhaka, Bangladesh</span>
            </p>
          </div>
          <div>
            <div className="flex gap-3 items-center text-white">
              <div className="font-medium flex items-center gap-1 cursor-pointer select-none">
                <span>Language</span>
                <FaCaretDown />
              </div>

              <div className="flex items-center gap-3 text-lg cursor-pointer">
                <FaFacebook className="hover:text-blue-500 transition" />
                <FaInstagram className="hover:text-pink-500 transition" />
                <FaLinkedin className="hover:text-blue-700 transition" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="relative bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="navbar flex items-center justify-between py-4">
            {/* Mobile menu button */}
            <div className="navbar-start">
              <div className="dropdown">
                <label
                  tabIndex={0}
                  className="btn btn-ghost lg:hidden p-2"
                  style={{ backgroundColor: "transparent" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-10 bg-white w-52 rounded-md border border-gray-200 p-3"
                  style={{ backgroundColor: "white" }}
                >
                  {menuNev}
                </ul>
              </div>
              <Link to="/" className="flex items-center py-2">
                <img src={logoImg} alt="Logo" className="h-10 w-auto" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-3">{menuNev}</ul>
            </div>

            {/* Auth Buttons */}
            <div className="navbar-end flex items-center gap-2">
              <Link to="/singup">
                <button className="bg-green-500 hover:bg-green-500 hover:text-green-100 text-white font-bold py-2 px-5 rounded-full transition duration-300">
                  Sign Up
                </button>
              </Link>

              {user ? (
                <button
                  onClick={handleLogoutBtn}
                  className="bg-blue-600 hover:bg-blue-600 hover:text-blue-200 text-white font-bold py-2 px-5 rounded-full transition duration-300"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="bg-blue-600 hover:bg-blue-600 hover:text-blue-200 text-white font-bold py-2 px-5 rounded-full transition duration-300">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
