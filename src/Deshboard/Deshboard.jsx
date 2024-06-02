import { Link, Outlet } from "react-router-dom";

const Deshboard = () => {
  return (
    <div>
      <div className="bg-gray-100 font-sans leading-normal tracking-normal min-h-screen">
        {/* Navbar */}
        <nav className="bg-[#3695EB] p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="text-white text-2xl font-bold">User Dashboard</div>
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
              <h2 className="text-2xl font-bold">Menu</h2>
              <ul className="mt-4">
              <li className="py-2 px-4 hover:bg-white hover:text-black rounded">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="py-2 px-4 hover:bg-white hover:text-black rounded">
                  <Link to={"userprofile"}>My Profile</Link>
                </li>
                <li className="py-2 px-4 hover:bg-white hover:text-black rounded">
                  <Link to={"userappoinment"}>Appoinment</Link>
                </li>
                <li className="py-2 px-4 hover:bg-white hover:text-black rounded">
                  <Link to={"testresult"}>Test Result</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-6">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

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
