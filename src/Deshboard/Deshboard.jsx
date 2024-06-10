import { FaAppStoreIos, FaHistory, FaHome, FaUser } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { PiFlagBannerFoldFill, PiTestTubeFill } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "./../Hooks/UseAdmin";

const Deshboard = () => {


  const [data] = useAdmin();
  console.log("data from deshboard", data);
  const admin = data?.admin;

  return (
    <div>
      <div className="bg-gray-100 font-sans leading-normal tracking-normal min-h-screen">
        {/* Navbar */}
        <nav className="bg-[#3695EB] p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="text-white text-2xl font-bold">
              {admin ? "Admin Deshboard" : "User Deshboard"}
            </div>
            <div>
              <button className="text-white focus:outline-none">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="bg-[#D7E5F5] w-full md:w-64 md:min-h-screen text-black font-Outfit text-[16px] font-[500]">
            <div className="p-4">
              <h2 className="text-2xl font-bold">
                {admin ? "Admin" : "User"} Menu
              </h2>
              <ul className="mt-4">
                {admin ? (
                  <>
                    <li className="py-2 px-4 font-DM font-[600] hover:bg-white hover:text-black rounded">
                      <Link to={"/"} className="flex  items-center gap-3">
                        <span>
                          <FaHome />
                        </span>
                        <span>Home</span>
                      </Link>
                    </li>
                    <li className="py-2 px-4 font-DM font-[600] hover:bg-white hover:text-black rounded">
                      <Link to={"alluser"} className="flex  items-center gap-3">
                        <span>
                          <FaUser />
                        </span>
                        <span>All User</span>
                      </Link>
                    </li>
                    <li className="py-2 px-4 font-DM font-[600] hover:bg-white hover:text-black rounded">
                      <Link to={"addtest"} className="flex  items-center gap-3">
                        <span>
                          <PiTestTubeFill />
                        </span>
                        <span>Add Test</span>
                      </Link>
                    </li>
                    <li className="py-2 px-4 font-DM font-[600] hover:bg-white hover:text-black rounded">
                      <Link to={"alltest"} className="flex  items-center gap-3">
                        <span>
                          <PiTestTubeFill />
                        </span>
                        <span>All Test</span>
                      </Link>
                    </li>

                    <li className="py-2 px-4 font-DM font-[600] hover:bg-white hover:text-black rounded">
                      <Link
                        to={"reservation"}
                        className="flex  items-center gap-3"
                      >
                        <span>
                          <FaHistory />
                        </span>
                        <span>Reservation</span>
                      </Link>
                    </li>
                    <li className="py-2 px-4 font-DM font-[600] hover:bg-white hover:text-black rounded">
                      <Link
                        to={"addbanner"}
                        className="flex  items-center gap-3"
                      >
                        <span>
                          <PiFlagBannerFoldFill />
                        </span>
                        <span>Add Banner</span>
                      </Link>
                    </li>
                    <li className="py-2 px-4 font-DM font-[600] hover:bg-white hover:text-black rounded">
                      <Link
                        to={"allbanner"}
                        className="flex  items-center gap-3"
                      >
                        <span>
                          <PiFlagBannerFoldFill />
                        </span>
                        <span>All Banner</span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="py-2 px-4 font-DM font-[600] hover:bg-white hover:text-black rounded">
                      <Link to={"/"} className="flex  items-center gap-3">
                        <span>
                          <FaHome />
                        </span>
                        <span>Home</span>
                      </Link>
                    </li>
                    <li className="py-2 px-4 font-DM font-[600] hover:bg-white hover:text-black rounded">
                      <Link
                        to={"userprofile"}
                        className="flex  items-center gap-3"
                      >
                        <span>
                          <PiFlagBannerFoldFill />
                        </span>
                        <span>User Profile</span>
                      </Link>
                    </li>

                    <li className="py-2 px-4 font-DM font-[600] hover:bg-white hover:text-black rounded">
                      <Link
                        to={"userappoinment"}
                        className="flex  items-center gap-3"
                      >
                        <span>
                          <FaAppStoreIos />
                        </span>
                        <span>Appoinment</span>
                      </Link>
                    </li>
                    <li className="py-2 px-4 font-DM font-[600] hover:bg-white hover:text-black rounded">
                      <Link
                        to={"testresult"}
                        className="flex  items-center gap-3"
                      >
                        <span>
                          <FaNoteSticky />
                        </span>
                        <span>Test Result</span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-6">
            {/* Responsive grid */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">Card 1</h2>
                <p className="text-gray-700">Content goes here...</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">Card 2</h2>
                <p className="text-gray-700">Content goes here...</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">Card 3</h2>
                <p className="text-gray-700">Content goes here...</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">Card 4</h2>
                <p className="text-gray-700">Content goes here...</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">Card 5</h2>
                <p className="text-gray-700">Content goes here...</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">Card 6</h2>
                <p className="text-gray-700">Content goes here...</p>
              </div>
            </div> */}

            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deshboard;
