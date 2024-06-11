import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
import PaymentModal from "../../Modal/PaymentModal.jsx";
import { useState } from "react";

const TestDetails = () => {
  const { id } = useParams();
  // console.log("alhamdulillah params is", id);
  const [isOpen, setIsOpen] = useState(false);

  const { data: testDetails = [], refetch } = useQuery({
    queryKey: ["testDetails"],
    enabled: !!id,
    queryFn: () =>
      axios(`https://my-ass-12-server.vercel.app/gettest/${id}`).then((res) => {
        return res.data;
      }),
  });
  // console.log("alhamdulillah testdetails data is ", testDetails);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="bg-[#EBF7F9] h-[300px] flex justify-center items-center flex-col space-y-3">
        <p className="font-Outfit font-semibold text-4xl md:text-6xl">
          Test Details
        </p>
        <div className="text-sm breadcrumbs">
          <ul className="font-Outfit">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="text-green-500">
              <a href="/details">Details</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="my-9 w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row gap-7">
        <div className="md:w-1/3">
          <div className="bg-gray-50 p-6 rounded-xl">
            <form className="flex items-center max-w-sm mx-auto">
              <div className="relative w-full">
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 pl-10"
                  placeholder="Search"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
              </div>
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-white bg-green-500 rounded-lg focus:ring-4 focus:outline-none"
              >
                <FaSearch />
              </button>
            </form>
          </div>

          <div className="bg-gray-50 p-7 rounded-lg my-7 space-y-5">
            <p className="font-Outfit font-semibold text-2xl">Neorology</p>
            {["Exray", "Blood", "Neurology"].map((item, index) => (
              <div key={index} className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title text-lg font-Outfit font-medium bg-white rounded-full">
                    {item}
                  </div>
                  <div className="collapse-content"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="flex justify-center md:justify-start">
            <img
              className="w-full md:w-9/12 h-64 md:h-96 object-cover rounded-2xl"
              src={testDetails?.bannerimg}
              alt="Test"
            />
          </div>
          <div className="mt-5">
            <p className="font-Outfit font-bold text-3xl md:text-5xl">
              {testDetails?.testname}
            </p>
            <p className="font-DM text-gray-600 text-base md:text-lg mt-4">
              {testDetails?.testdetails}
            </p>
            <div className="my-6 space-y-4">
              <p className="font-Outfit font-semibold text-lg">
                Test Price: <span>{testDetails?.testprice}</span>
              </p>
              <p className="font-Outfit font-semibold text-lg">
                Date:{" "}
                <span>
                  {testDetails.date && testDetails.date.split("T")[0]}
                </span>
              </p>
              <p className="font-Outfit font-semibold text-lg">
                Slots Number: <span>{testDetails?.slotsnumber}</span>
              </p>
            </div>
            <div>
              {parseInt(testDetails.slotsnumber) > 0 ? (
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                >
                  Book Now
                </button>
              ) : (
                <button className="bg-gradient-to-b from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                  Not Available
                </button>
              )}
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
      </div>
    </div>
  );
};

export default TestDetails;
