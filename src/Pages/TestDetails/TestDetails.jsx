import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
import PaymentModal from "../../Modal/PaymentModal.jsx";
import { useState } from "react";

const TestDetails = () => {
  const { id } = useParams();
  console.log("alhamdulillah params is", id);
  const [isOpen, setIsOpen] = useState(false);
  // const now = new Date();
  // const hours = now.getHours();
  // const minutes = now.getMinutes();
  // const seconds = now.getSeconds();
  // console.log(`Current Time: ${hours}:${minutes}:${seconds}`);

  const { data: testDetails = [], refetch } = useQuery({
    queryKey: ["testDetails"],
    enabled: !!id,
    queryFn: () =>
      axios(`http://localhost:5000/gettest/${id}`).then((res) => {
        return res.data;
      }),
  });
  console.log("alhamdulillah testdetails data is ", testDetails);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="bg-[#EBF7F9] h-[300px] flex justify-center items-center space-y-3 flex-col">
        <p className="font-Outfit font-[600] text-[64px]">Test Details</p>
        <div>
          <div className="text-sm breadcrumbs">
            <ul className="font-Outfit">
              <li>
                <a>Home</a>
              </li>
              <li className="text-green-500">
                <a>Details</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-9 w-10/12 mx-auto ">
        <div className=" flex  gap-7   ">
          <div>
            <div className="bg-gray-50 p-9 rounded-xl  ">
              <form className="flex items-center max-w-sm mx-auto">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full ps-10 p-2.5   "
                  />
                </div>
                <button
                  type="submit"
                  className="p-2.5 ms-2 text-sm font-medium text-white bg-green-500 rounded-lg border   focus:ring-4 focus:outline-none    "
                >
                  <FaSearch></FaSearch>
                </button>
              </form>
            </div>
            <div className="bg-gray-50 p-7 rounded-lg my-7 space-y-5 ">
              <p className="font-Outfit font-[600] text-[24px]">Neorology</p>
              <div>
                <div className="join join-vertical w-full border-none">
                  <div className="collapse collapse-arrow join-item   ">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-[16px] font-Outfit font-[500] border-none bg-white rounded-full">
                      Exray
                    </div>
                    <div className="collapse-content"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="join join-vertical w-full border-none">
                  <div className="collapse collapse-arrow join-item   ">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-[16px] font-Outfit font-[500] border-none bg-white rounded-full">
                      Blood
                    </div>
                    <div className="collapse-content"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="join join-vertical w-full border-none">
                  <div className="collapse collapse-arrow join-item   ">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-[16px] font-Outfit font-[500] border-none bg-white rounded-full">
                      Neurology
                    </div>
                    <div className="collapse-content"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="  w-full">
            <div className="rounded-lg flex ">
              <img
                className=" w-9/12 h-[400px] rounded-2xl "
                src={testDetails?.bannerimg}
                alt=""
              />
            </div>
            <div>
              <p className="font-Outfit font-[700] text-[48px]">
                {testDetails?.testname}
              </p>
              <p className="font-DM text-[#788094] text-[16px] font-[400]">
                {testDetails?.testdetails}
              </p>
              <div className="my-12">
                <p>
                  <span className="font-Outfit font-[600] text-[20px] ">
                    testprice:{" "}
                  </span>
                  <span>{testDetails?.testprice}</span>
                </p>
                <p>
                  <span className="font-Outfit font-[600] text-[20px] ">
                    Date :
                  </span>
                  <span>
                    {testDetails.date && testDetails.date.split("T")[0]}{" "}
                  </span>
                </p>
                <p>
                  <span className="font-Outfit font-[600] text-[20px] ">
                    Slots Number{" "}
                  </span>
                  <span>{testDetails?.slotsnumber}</span>
                </p>
              </div>
              <div>
                {parseInt(testDetails.slotsnumber) > 0 ? (
                  <>
                    <button
                      onClick={() => setIsOpen(true)}
                      className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out  "
                    >
                      Book Now
                    </button>
                  </>
                ) : (
                  <button className="bg-gradient-to-b from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                    Not Avalablle this 
                  </button>
                )}
                {/* payment modal  */}
                <PaymentModal
                  isOpen={isOpen}
                  refetch={refetch}
                  closeModal={closeModal}
                  paymentPrice={{price: testDetails?.testprice}}
                  paymentCollectionId={testDetails?._id}
                  testInfo={{
                    testName: testDetails?.testname,
                    testId: testDetails?._id,
                    
                  }}

                ></PaymentModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDetails;
