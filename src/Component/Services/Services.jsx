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

  console.log(servicesOptionsData);

  return (
    <div className="bg-[#F5F7FA] min-h-[600px] py-10">
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-2 mt-5 justify-center items-center ">
          <div>
            <img
              className=""
              src="https://i.ibb.co.com/4wpZ9gwc/rana.png"
              alt=""
            />
          </div>
          <div>
            <p className="font-Outfit text-[18px]  text-[#04CE78] font-[500]">
              OUR SERVICES
            </p>
          </div>
        </div>
        <div>
          {" "}
          <p className="  text-xl   md:text-[48px] font-Outfit text-[#000D44] font-[600] text-center md:leading-[50px] mt-4 ">
            Our Mediax specialties <br />
            Technical service
          </p>
        </div>
      </div>

      {/* card section starterd alhamdulillah */}
      <div className=" mx-auto w-10/12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-11 ">
          {servicesOptionsData.map((dataServicesOption, idx) => (
            <div
              className="flex group relative justify-center items-center shadow-sm flex-col bg-white  rounded-xl py-5"
              key={idx}
            >
              <img className="absolute top-0 right-0" src="https://i.ibb.co.com/rfq2BqRm/shapes.png" alt="" />
              <img
                className="w-20 group-hover:rotate-180 transition-transform duration-[2000ms]  z-40 mb-6 text-[16px] bg-[#EDF5F8] hover:bg-[#35DC95]   p-3 rounded-full"
                src={dataServicesOption?.icon}
                alt=""
              />
              <h1 className="font-[600] z-40 text-[24px]  font-Outfit text-[#09184C] group-hover:text-white hover:text-[#04CE78]">
                {dataServicesOption?.title}
              </h1>
              <p className="mt-2 group-hover:text-gray-200 z-40">{dataServicesOption?.subtitle}</p>
              <button
                style={{
                  background:
                    "linear-gradient(180deg, #C2D4FF 37.5%, #F0F4FF 100%)",  
                }}
                className="text-black z-40 font-semibold my-6 px-6 py-2 rounded-full shadow-sm   shadow-blue-200 hover:scale-105 transition-transform"
              >
                READ MORE    
              </button>
              <img className="absolute top-0 left-0 h-full rounded-xl opacity-0 group-hover:opacity-100     duration-[400ms] ease-in-out " src={dataServicesOption?.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
