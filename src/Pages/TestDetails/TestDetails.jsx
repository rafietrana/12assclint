import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
import PaymentModal from "../../Modal/PaymentModal.jsx";
import { useState } from "react";
import Footer from "../../Shyerd/Footer/Footer.jsx";

const TestDetails = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const { data: testDetails = [], refetch } = useQuery({
    queryKey: ["testDetails"],
    enabled: !!id,
    queryFn: () =>
      axios(`https://my-ass-12-server.vercel.app/gettest/${id}`).then(
        (res) => res.data
      ),
  });

  const closeModal = () => setIsOpen(false);

  return (
    <div className="font-Outfit">
      {/* Banner Section */}
      <div className="bg-[#F1F5F9] h-[300px] flex flex-col justify-center items-center text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-semibold">Test Details</h1>
        <div className="text-sm breadcrumbs">
          <ul className="flex space-x-2">
            <li>
              <a href="/" className="text-gray-600 hover:text-green-600">
                Home
              </a>
            </li>
            <li className="text-green-600 font-medium">Details</li>
          </ul>
        </div>
      </div>

      {/* Main Section */}
      <div className="my-10 w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Sidebar */}
        <div className="md:w-1/3 space-y-8">
          {/* Search */}
          <div className="bg-white shadow-md p-5 rounded-lg">
            <form className="flex items-center">
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Search"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <FaSearch />
                </div>
              </div>
              <button
                type="submit"
                className="ml-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                <FaSearch />
              </button>
            </form>
          </div>

          {/* Category Filter */}
          <div className="bg-white shadow-md p-6 rounded-lg space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Category</h2>
            {["Exray", "Blood", "Neurology"].map((item, i) => (
              <div
                key={i}
                className="collapse collapse-arrow bg-gray-100 rounded-md"
              >
                <input type="radio" name="accordion" />
                <div className="collapse-title text-base font-medium">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-2/3">
          {/* Image */}
          <div className="flex justify-center md:justify-start mb-6">
            <img
              className="w-full md:w-10/12 h-64 md:h-[400px] object-cover rounded-xl shadow"
              src={testDetails?.bannerimg}
              alt="Test"
            />
          </div>

          {/* Test Info */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              {testDetails?.testname}
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {testDetails?.testdetails}
            </p>

            <div className="space-y-2 mt-5">
              <p className="text-lg text-gray-700 font-semibold">
                Test Price:{" "}
                <span className="text-green-600">
                  ${testDetails?.testprice}
                </span>
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                Date:{" "}
                <span className="text-green-600">
                  {testDetails.date && testDetails.date.split("T")[0]}
                </span>
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                Slots Available:{" "}
                <span className="text-green-600">
                  {testDetails?.slotsnumber}
                </span>
              </p>
            </div>

            {/* Button */}
            <div className="mt-6">
              {parseInt(testDetails.slotsnumber) > 0 ? (
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow"
                >
                  Book Now
                </button>
              ) : (
                <button
                  className="bg-gray-500 cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg"
                  disabled
                >
                  Not Available
                </button>
              )}
            </div>

            {/* Modal */}
            <PaymentModal
              isOpen={isOpen}
              refetch={refetch}
              closeModal={closeModal}
              paymentPrice={{ price: testDetails?.testprice }}
              paymentCollectionId={testDetails?._id}
              testInfo={{
                testName: testDetails?.testname,
                testId: testDetails?._id,
              }}
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TestDetails;
