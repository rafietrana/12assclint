import { FaHeartbeat, FaStar } from "react-icons/fa";
import aboutImg from "../../assets/aboutimg.png";
import { IoCall } from "react-icons/io5";
import { motion } from "framer-motion";

// Animation Variants
const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};

const About = () => {
  return (
    <div className="relative lg:mt-32 mt-0">
      {/* Floating Image */}
      <motion.img
        className="absolute hidden md:block bottom-0 right-10 animate-bounce [animation-duration:2s] -z-10"
        src="https://i.ibb.co.com/tML8rbzv/medicine-1.png"
        alt=""
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <div className="w-9/12 my-7 py-24 mx-auto">
        <div className="md:flex gap-12">
          {/* Left Side - Image Section */}
          <motion.div className="md:w-1/2 relative" variants={fadeIn("left", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <img className="hidden md:block" src={aboutImg} alt="Doctor" />
            <motion.div className="hidden md:block absolute bottom-2 right-0" variants={fadeIn("up", 0.4)} initial="hidden" whileInView="show">
              <div className="w-[210px] h-[180px] shadow-lg rounded-xl space-y-2 flex justify-center items-center flex-col p-5">
                <motion.div className="text-[#000D44] font-[600] text-center text-[20px]">
                  Dr. Esita Jabed
                </motion.div>
                <p className="font-DM text-center text-[#788094] font-[400] text-[16px]">
                  Mention the languages in which the staff.
                </p>
                <div className="flex justify-center">
                  {[...Array(4)].map((_, index) => (
                    <motion.p key={index} className="text-green-500" variants={fadeIn("up", 0.5)} initial="hidden" whileInView="show">
                      <FaStar />
                    </motion.p>
                  ))}
                </div>
                <p className="flex gap-2 items-center">
                  <span className="text-green-500">
                    <IoCall />
                  </span>
                  <span className="font-Outfit font-[500] text-[16px]">+88 01727993241</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content Section */}
          <motion.div className="space-y-5 md:w-1/2" variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show">
            {/* About Header */}
            <motion.div className="flex gap-2 mt-9 md:mt-0" variants={fadeIn("up", 0.3)}>
              <img src="https://i.ibb.co.com/4wpZ9gwc/rana.png" alt="About Icon" />
              <p className="font-Outfit uppercase bg-green font-bold text-[#0DD07D]"> ABOUT US COMPANY </p>
            </motion.div>

            {/* Title */}
            <motion.p className="font-Outfit md:leading-[57px] text-xl md:text-[48px] font-[600]" variants={fadeIn("up", 0.4)}>
              Affordable Health Care Solutions
            </motion.p>

            {/* Description */}
            <motion.p className="font-Outfit text-[#788094]" variants={fadeIn("up", 0.5)}>
              A brief statement outlining the purpose and mission of the clinic. This can include the commitment to patient care, community health, and any specific goals for our values.
            </motion.p>

            {/* Services List */}
            <div className="flex-none md:flex gap-9">
              <motion.div className="space-y-3" variants={fadeIn("left", 0.6)} initial="hidden" whileInView="show">
                {["Medical Professionals", "Emergency Care", "Services Offered"].map((item, index) => (
                  <p key={index} className="flex gap-2 items-center">
                    <span className="text-green-500">
                      <FaHeartbeat />
                    </span>
                    <span className="font-DM text-[#000D44]">{item}</span>
                  </p>
                ))}
              </motion.div>

              <motion.div className="space-y-3" variants={fadeIn("right", 0.7)} initial="hidden" whileInView="show">
                {["Facilities and Equipment", "Medical Consulting", "Specializations"].map((item, index) => (
                  <p key={index} className="flex gap-2 items-center">
                    <span className="text-green-500">
                      <FaHeartbeat />
                    </span>
                    <span className="font-DM text-[#000D44]">{item}</span>
                  </p>
                ))}
              </motion.div>
            </div>

            {/* Appointment Button */}
            <motion.button
              className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-6"
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView="show"
            >
              APPOINTMENT NOW
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
