import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  const servicesOptionsData = [
    {
      title: "Internal Medicine",
      subtitle: "30+ Doctors",
      image: "https://i.ibb.co.com/CsH0cvVK/service-card-1-1.jpg",
      icon: "https://i.ibb.co.com/Fk1qKL0L/service-card-1-1.png",
    },
    {
      title: "Dental Care",
      subtitle: "20+ Doctors",
      image: "https://i.ibb.co.com/JFGQjM77/service-card-2.jpg",
      icon: "https://i.ibb.co.com/SXT1RL57/service-card-2.png",
    },
    {
      title: "Urology Care",
      subtitle: "20+ Doctors",
      image: "https://i.ibb.co.com/MkbWcfdy/service-card-3.jpg",
      icon: "https://i.ibb.co.com/Y75JvYWy/service-card-3.png",
    },
    {
      title: "Neurology Care",
      subtitle: "10+ Doctors",
      image: "https://i.ibb.co.com/N6pFwhVJ/service-card-4.jpg",
      icon: "https://i.ibb.co.com/jtC21sP/service-card-4.png",
    },
    {
      title: "Gynecologists",
      subtitle: "30+ Doctors",
      image: "https://i.ibb.co.com/m5GQKkzq/service-card-5.jpg",
      icon: "https://i.ibb.co.com/jqBGRsZ/service-card-5.png",
    },
    {
      title: "Ophthalmology",
      subtitle: "24+ Doctors",
      image: "https://i.ibb.co.com/m5GQKkzq/service-card-5.jpg",
      icon: "https://i.ibb.co.com/Fkvd4psq/service-card-6.png",
    },
    {
      title: "Orthopedics",
      subtitle: "26+ Doctors",
      image: "https://i.ibb.co.com/HDMNcMm6/service-card-7.jpg",
      icon: "https://i.ibb.co.com/PZNc5wRB/service-card-7.png",
    },
    {
      title: "Cardiology",
      subtitle: "20+ Doctors",
      image: "https://i.ibb.co.com/HDMNcMm6/service-card-7.jpg",
      icon: "https://i.ibb.co.com/Gf0sN5Mf/service-card-8.png",
    },
    {
      title: "CardioSurgery Center",
      subtitle: "21+ Doctors",
      image: "https://i.ibb.co.com/HDMNcMm6/service-card-7.jpg",
      icon: "https://i.ibb.co.com/XxBzjmWf/service-card-9.png",
    },
    {
      title: "Hematology",
      subtitle: "24+ Doctors",
      image: "https://i.ibb.co.com/JFGQjM77/service-card-2.jpg",
      icon: "https://i.ibb.co.com/XxBzjmWf/service-card-9.png",
    },
    {
      title: "Pulmonology",
      subtitle: "26+ Doctors",
      image: "https://i.ibb.co.com/MkbWcfdy/service-card-3.jpg",
      icon: "https://i.ibb.co.com/zV6xc5qc/service-card-11.png",
    },
    {
      title: "Audiology Care",
      subtitle: "28+ Doctors",
      image: "https://i.ibb.co.com/N6pFwhVJ/service-card-4.jpg",
      icon: "https://i.ibb.co.com/s9jG0hhX/service-card-12.png",
    },
  ];




  const handleServicesButton = () =>{
    document.getElementById('book-appoinment').scrollIntoView({behavior:'smooth'})
  }

  return (
    <div className="bg-[#F5F7FA] min-h-[600px] py-10">
      {/* Section Title */}
      <motion.div
        className="text-center"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="flex gap-2 justify-center items-center">
          <motion.img
    variants={fadeIn("down", 0.3)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: false, amount: 0.2 }}
           src="https://i.ibb.co/4wpZ9gwc/rana.png" alt="" />
          <motion.div
            className="text-[#04CE78] font-semibold text-lg"
          variants={fadeIn("down", 0.3)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: false, amount: 0.2 }}
          >
            OUR SERVICES
          </motion.div>
        </div>
        <motion.p className="text-xl font-Outfit md:text-[30px] font-semibold text-[#000D44] mt-4"
           variants={fadeIn("down", 0.3)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: false, amount: 0.2 }}>
          Our Mediax specialties <br /> Technical service
        </motion.p>
      </motion.div>

      {/* Services Cards */}
      <div className="mx-auto w-10/12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-11"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {servicesOptionsData.map((dataServicesOption, idx) => (
            <motion.div
              className="relative flex flex-col justify-center items-center bg-white   rounded-xl py-6 group overflow-hidden"
              key={idx}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                src="https://i.ibb.co/rfq2BqRm/shapes.png"
                alt=""
              />
              <motion.img
                className="w-16 group-hover:rotate-180 transition-transform duration-1000 z-40 mb-4"
                src={dataServicesOption.icon}
                alt=""
                whileHover={{ rotate: 360 }}
              />
              <motion.h1
                className="text-xl font-semibold text-[#09184C] group-hover:text-white transition-colors duration-500 z-20"
                whileHover={{ color: "#04CE78" }}
              >
                {dataServicesOption.title}
              </motion.h1>
              <motion.p className="mt-2 text-gray-500 group-hover:text-white z-20">
                {dataServicesOption.subtitle}
              </motion.p>
              <motion.button
              onClick={handleServicesButton}
                className="text-black bg-gradient-to-b from-[#C2D4FF] hover:from-[#35DC95] to-[#F0F4FF] hover:to-white z-40 font-semibold my-4 px-6 py-2 rounded-full  hover:scale-105 transition-transform"
                whileHover={{ scale: 1.1 }}
              >
                Book Appoinment
              </motion.button>
              <motion.img
                className="absolute top-0 left-0 h-full w-full rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                src={dataServicesOption.image}
                alt=""
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
