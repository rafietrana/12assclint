import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const BookAnAppoinment = () => {
  return (
    <div className="-z-30">
      <div className="bg-[#F5F7FA]">
        <motion.p
          className="text-[100px] text-white tracking-[0.5em] font-bold hidden md:block"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          MEDIX
        </motion.p>
      </div>

      {/* Box start */}
      <div className="relative min-h-[469px]">
        <img
          className="absolute -z-20 top-0 left-0 w-full h-full object-cover"
          src="https://i.ibb.co.com/XfW9HLSD/cta-bg-4.jpg"
          alt=""
        />
        <img
          className="hidden md:block absolute w-[600px] right-0 bottom-0"
          src="https://i.ibb.co.com/k2FJkZbv/right-doctor-image.png"
          alt=""
        />

        <div className="w-10/12 h-[469px] mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start">
          <div className="w-full md:w-[55%] space-y-6">
            <motion.h1
              className="font-Outfit pt-12 md:pt-0 lg:leading-[50px] text-white text-[24px] sm:text-[30px] md:text-[48px] font-[600]"
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              We’re welcoming new patients and can’t wait to meet you!
            </motion.h1>
            <motion.p
              className="text-[16px] text-white font-[400] sm:w-full md:w-10/12 "
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              A brief statement outlining the purpose and mission of the clinic.
              This can include the commitment to patient care, community health,
              and any specific goals or values. Specify the types of medical
              services provided.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-5">
              <motion.button
                className="bg-gradient-to-b from-[#4FE4A4] to-[#B4E8C9] text-black font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition duration-300 ease-in-out"
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                BOOK APPOINTMENT
              </motion.button>
              <motion.button
                className="bg-gradient-to-b from-[#E8ECF3] to-[#FFFFFF] text-black font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition duration-300 ease-in-out"
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                GET FREE CONSULTING
              </motion.button>
            </div>
          </div>

          {/* Empty section on the right for spacing */}
          <div className="w-[45%] hidden md:block"></div>
        </div>
      </div>
      {/* Box end */}
    </div>
  );
};

export default BookAnAppoinment;
