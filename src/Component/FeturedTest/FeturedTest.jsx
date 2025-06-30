import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const FeturedTest = () => {
  const {
    data: getsortfeturedtest = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios("https://my-ass-12-server.vercel.app/getsortfeturedid").then(
        (res) => res.data
      ),
  });

  if (isLoading) {
    return (
      <div className="text-center py-10 text-lg font-medium text-gray-600">
        Loading featured tests...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-10 text-lg font-medium text-red-600">
        Failed to load featured tests. Please try again later.
      </div>
    );
  }

  return (
    <div className="bg-white">
    <div className="w-full lg:w-11/12 mx-auto    px-4 md:px-10    ">
      {/* title section start */}
      <div className="mb-10">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-2 mt-5 justify-center items-center ">
            <div>
              <motion.img
                className=""
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                src="https://i.ibb.co.com/4wpZ9gwc/rana.png"
                alt=""
              />
            </div>
            <div>
              <motion.p
                className="font-Outfit text-[18px] uppercase text-[#04CE78] font-[500]"
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                Featured Tests
              </motion.p>
            </div>
          </div>
          <div>
            {" "}
            <motion.p
              className="  text-lg   md:text-[30px] font-Outfit text-[#000D44] font-[600] text-center md:leading-[50px]   "
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              Check out our most popular test
            </motion.p>
          </div>
        </div>
      </div>
      {/* title section end */}

      <div className="overflow-x-auto bg-white   rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-3 text-left">Banner</th>
              <th className="px-4 py-3 text-left">Test Name</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Slots</th>
              <th className="px-4 py-3 text-left">Bookings</th>
              <th className="px-4 py-3 text-left">Details</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {getsortfeturedtest.map((test) => (
              <tr key={test._id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3">
                  <img
                    src={test.bannerimg}
                    alt={test.testname}
                    className="w-24 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="px-4 py-3 font-medium">{test.testname}</td>
                <td className="px-4 py-3">{test.date?.split("T")[0]}</td>
                <td className="px-4 py-3">{test.slotsnumber}</td>
                <td className="px-4 py-3">{test.count}</td>
                <td className="px-4 py-3 text-gray-600">
                  {test.testdetails?.slice(0, 30)}...
                </td>
                <td className="px-4 py-3 text-center">
                  <Link to={`/testdetails/${test._id}`}>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm transition">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {getsortfeturedtest.length === 0 && (
          <div className="text-center p-6 text-gray-500">
            No featured tests found.
          </div>
        )}
      </div>
    </div>
    </div>

  );
};

export default FeturedTest;
