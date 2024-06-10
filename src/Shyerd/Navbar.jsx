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
  console.log("alhamdulillah user from nabvar component", user);
  console.log("alhamdulillah logout is ", logout);

  const menuNev = (
    <>
      <li>
        <Link className="font-DM uppercase font-medium text-[17px] text-sm ">
          Home
        </Link>
      </li>

      {user && (
        <li>
          {" "}
          <Link
            to={"deshboard"}
            className="font-DM uppercase font-medium text-[17px] text-sm"
          >
            {data?.admin ? <p>Admin Deshboard</p> : <p>user Deshboard</p>}
          </Link>{" "}
        </li>
      )}

      <li>
        <Link
          to={"/alltestpage"}
          className="font-DM uppercase font-medium text-[17px] text-sm"
        >
          All Test
        </Link>
      </li>
      <li>
        <Link className="font-DM uppercase font-medium text-[17px] text-sm">
          pages
        </Link>
      </li>
      <li>
        <Link className="font-DM uppercase font-medium text-[17px] text-sm">
          Blog
        </Link>
      </li>
      <li>
        <Link className="font-DM uppercase font-medium text-[17px] text-sm">
          Contact
        </Link>
      </li>
    </>
  );

  const handleLogoutBtn = () => {
    console.log("alhamdulillah your logout button is now working mashalllah");
    logout()
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      {/* top navBar */}

      <div className="w-full bg-[#1F5FFF] p-3 hidden lg:block  ">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <p className="flex items-center gap-3 text-white font-sans font-medium ">
              <span className="p-1 border-2   border-white rounded-full text-white text-xl ">
                <IoIosCall />
              </span>{" "}
              <span>Phone: 01727993241</span>
            </p>
            <p className="flex items-center gap-3 text-white font-sans font-medium ">
              <span className="p-1 border-2   border-white rounded-full text-white text-xl ">
                <MdOutlineMessage />
              </span>{" "}
              <span>Phone: 01727993241</span>
            </p>
            <p className="flex items-center gap-3 text-white font-sans font-medium ">
              <span className="p-1 border-2   border-white rounded-full text-white text-xl ">
                <MdLocationPin />
              </span>{" "}
              <span>Phone: 01727993241</span>
            </p>
          </div>
          <div>
            <div className="flex gap-5 items-center">
              <p className="font-medium text-white flex gap-2 items-center">
                {" "}
                <span>Language </span>
                <span className="text-white font-bold">
                  <FaCaretDown />
                </span>{" "}
              </p>

              <p className="font-medium text-white flex gap-2 items-center">
                Follow:{" "}
                <span>
                  <FaFacebook></FaFacebook>
                </span>{" "}
                <span>
                  <FaInstagram></FaInstagram>
                </span>{" "}
                <span>
                  <FaLinkedin></FaLinkedin>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom navbr */}
      <div className="shadow-md items-center ">
        <div className="navbar  mx-auto ">
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
                className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52"
              >
                {menuNev}
              </ul>
            </div>
            <div className="  px-11  py-3">
              <img src={logoImg} alt="" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuNev}</ul>
          </div>
          <div className="navbar-end flex items-center gap-2">
            <Link to={"/singup"}>
              <button className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out  ">
                SING UP
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
  );
};

export default Navbar;
