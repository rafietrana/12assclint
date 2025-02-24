import { FaHeartbeat, FaStar } from "react-icons/fa";
import aboutImg from "../../assets/aboutimg.png";
import { IoCall } from "react-icons/io5";
const About = () => {
  return (
    <div className="relative">
  <img className="absolute bottom-0 right-10 animate-bounce [animation-duration:2s] " src="https://i.ibb.co.com/tML8rbzv/medicine-1.png" alt="" />
   <div className="w-9/12 my-7 py-24 mx-auto ">
      
      <div className="md:flex gap-12 ">
        <div className="md:w-1/2 relative">
          <img src={aboutImg} alt="" />
          <div className="hidden md:block absolute bottom-2 right-0">
            <div className="w-[210px] h-[180px] shadow-lg rounded-xl   space-y-2 flex justify-center items-center flex-col p-5">
              <p className="text-[#000D44] font-[600] text-center text-[20px]">
                Dr. Esita Jabed
              </p>
              <p className="font-DM text-center   text-[#788094] font-[400] text-[16px]  ">
                Mention the languages in which the staff.
              </p>
              <div className="flex justify-center ">
                <p className="text-green-500">
                  <FaStar />
                </p>
                <p className="text-green-500">
                  <FaStar />
                </p>
                <p className="text-green-500">
                  <FaStar />
                </p>
                <p className="text-green-500">
                  <FaStar />
                </p>
              </div>
              <p>
                <p className="flex gap-2 items-center ">
                  {" "}
                  <span className="text-green-500">
                    <IoCall />
                  </span>{" "}
                  <span className="font-Outfit font-[500] text-[16px] flex justify-center ">
                    +88 01727993241
                  </span>
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5 md:w-1/2">
          
            <div className="flex gap-2">
            <div>
                <img src="https://i.ibb.co.com/4wpZ9gwc/rana.png" alt="" />
            </div>
              <div><p className="font-Outfit uppercase bg-green font-bold text-[#0DD07D]">  ABOUT US COMPANY</p></div>
            </div>
    
 
          <p className="font-Outfit leading-[57px]   text-[48px] font-[600]">
            Affordable Health Care Solutions
          </p>
          <p className="font-Outfit text-[#788094]">
            A brief statement outlining the purpose and mission of the clinic.
            This can include the commitment to patient care, community health,
            and any specifical goals for our values.
          </p>
          <div className="flex gap-9">
            <div className="space-y-3">
              <p className="flex gap-2 items-center ">
                <span className="text-green-500 ">
                  <FaHeartbeat />
                </span>
                <span className="font-DM text-[#000D44]">
                  Medical Professionals
                </span>
              </p>
              <p className="flex gap-2 items-center ">
                <span className="text-green-500 ">
                  <FaHeartbeat />
                </span>
                <span className="font-DM text-[#000D44]">Emergancy Care</span>
              </p>
              <p className="flex gap-2 items-center ">
                <span className="text-green-500 ">
                  <FaHeartbeat />
                </span>
                <span className="font-DM text-[#000D44]">Services Offered</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex gap-2 items-center ">
                <span className="text-green-500 ">
                  <FaHeartbeat />
                </span>
                <span className="font-DM text-[#000D44]">
                  Facilities and Equipment
                </span>
              </p>
              <p className="flex gap-2 items-center ">
                <span className="text-green-500 ">
                  <FaHeartbeat />
                </span>
                <span className="font-DM text-[#000D44]">
                  Medical Consulting
                </span>
              </p>
              <p className="flex gap-2 items-center ">
                <span className="text-green-500 ">
                  <FaHeartbeat />
                </span>
                <span className="font-DM text-[#000D44]">Specializations</span>
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-6 ">
            APPOINTMENT NOW
          </button>
        </div>
      </div>
    </div>
    </div>
 
  );
};

export default About;
