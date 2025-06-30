import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const ChooseMe = () => {
  const timelineData = [
    {
      number: "01",
      title: "Compassionate & Expert Care",
      description:
        "Our team of dedicated healthcare professionals combines years of experience with a genuine commitment to providing excellent service.",
    },
    {
      number: "02",
      title: "Advanced Medical Technology",
      description:
        "We utilize cutting-edge medical equipment and techniques to ensure accurate diagnosis and effective treatment for our patients.",
    },
    {
      number: "03",
      title: "24/7 Emergency Support",
      description:
        "Our emergency services are available around the clock to provide immediate assistance and ensure patient safety at all times.",
    },
];

  return (
    <div className=" px-4 py-10   bg-white">
      <div className="w-full  md:w-11/12 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* Left Section */}

        <div className="lg:w-1/2 w-full">
          <div>
            {/* Section Title */}
            <div className="flex gap-2 items-center">
              <motion.img
                src="https://i.ibb.co/4wpZ9gwc/rana.png"
                alt="icon"
                className="w-8 h-8"
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              />
              <motion.p
                className="text-[16px] md:text-[18px] text-[#04CE78] font-semibold"
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                WHY CHOOSE US
              </motion.p>
            </div>
            <motion.h1
              className="text-[28px] md:text-[30px] lg:text-[40px] font-bold leading-[40px] md:leading-[50px] mt-4 mb-6 text-[#000D44]"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              We Are Always Open For Your Health Services
            </motion.h1>

            {/* Timeline Section */}
            <div className="relative ml-5 border-l-4 h border-[#04CE78]">
              {/* Timeline Items */}
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex gap-5 items-start mt-8"
                  variants={fadeIn("up", 0.5 + 0.1 * index)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {/* Circular Number */}
                  <div className="absolute -left-[20px] w-10 h-10 flex items-center justify-center text-white font-bold text-lg bg-[#04CE78] rounded-full border-4 border-white shadow-md">
                    {item.number}
                  </div>

                  {/* Text Section */}
                  <div className="ml-8 pb-6">
                    <motion.h1
                      className="font-semibold text-[20px] md:text-[24px] text-[#000D44]"
                      variants={fadeIn("up", 0.6)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.2 }}
                    >
                      {item.title}
                    </motion.h1>
                    <motion.p
                      className="text-[14px] md:text-[16px] mt-3 font-medium text-[#788094]"
                      variants={fadeIn("up", 0.7)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.2 }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <motion.img
            className="rounded-xl w-full max-w-md lg:max-w-full shadow-lg"
            src="https://i.ibb.co/wht8tKP5/rightchoseme-image.jpg"
            alt="choose us"
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseMe;
