import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

const DoctorProfessional = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Abdul Kabir",
      specialty: "Cardiologist",
      image: "https://i.ibb.co.com/pv0VSvtR/team-1-1.jpg",
    },
    {
      id: 2,
      name: "Dr. Billal Hossain",
      specialty: "Neurologist",
      image: "https://i.ibb.co.com/bM4YLWkn/team-1-2.jpg",
    },
    {
      id: 3,
      name: "Dr. Chack Mad",
      specialty: "Dermatologist",
      image: "https://i.ibb.co.com/HwPRWX2/team-1-3.jpg",
    },
    {
      id: 4,
      name: "Dr. Daharun",
      specialty: "Pediatrician",
      image: "https://i.ibb.co.com/TMQZw2Yq/team-1-4.jpg",
    },
    {
      id: 5,
      name: "Dr. Enchkal",
      specialty: "Oncologist",
      image: "https://i.ibb.co.com/XfhYPKXB/team-1-5.jpg",
    },
    {
      id: 6,
      name: "Dr. Farhad uddin",
      specialty: "Gynecologist",
      image: "https://i.ibb.co.com/x8fXqsNn/team-1-6.jpg",
    },
    {
      id: 7,
      name: "Dr. Gadch akand",
      specialty: "Orthopedic",
      image: "https://i.ibb.co.com/jkVcy7X9/team-1-7.jpg",
    },
    {
      id: 8,
      name: "Dr. Halak Hossain",
      specialty: "Psychiatrist",
      image: "https://i.ibb.co.com/TqphtdTb/team-1-8.jpg",
    },
  ];

  console.log(doctors);

  return (
    <div>
      <div className="w-9/12  mt-32 mx-auto">
        {/* title section start */}
        <div>
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
                  Expert Doctors
                </motion.p>
              </div>
            </div>
            <div>
              {" "}
              <motion.p className="  text-xl   md:text-[30px] font-Outfit text-[#000D44] font-[600] text-center md:leading-[50px]  "
     
                    variants={fadeIn("down", 0.3)}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: false, amount: 0.2 }}
              >
                
                Meet our professional Doctors
              </motion.p>
            </div>
          </div>
        </div>
        {/* title section end */}
        {/* slider option start  */}
        <div className="my-10">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {doctors.map((doctor) => (
              <SwiperSlide key={doctor.id}>
                <div className="p-4 bg-white  text-center">
                  <img src={doctor.image} alt={doctor.name} className="" />
                  <h3 className="mt-2 font-[600] text-[17px]  text-black font-Outfit">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-600m texty-[14px]">
                    {doctor.specialty}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* slider option end */}
      </div>
    </div>
  );
};

export default DoctorProfessional;
