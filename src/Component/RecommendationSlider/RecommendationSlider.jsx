import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";

const RecommendationSlider = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios("../../../public/Recommendation.json").then((res) => {
      setRecommendations(res?.data);
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // arrows: true,
  };

  return (
    <div className="flex justify-center"> {/* Center aligning */}
      <section className="bg-blue-50 py-12 md:w-9/12 w-full mb-28 h-[400px] flex items-center flex-col bg-cover bg-[url('https://i.ibb.co/X4chSx9/video-bg.jpg')]">
        <div className="container mx-auto px-6">
          <Slider className="md:w-6/12 mt-8 w-full mx-auto" {...settings}>
            {recommendations.map((recommendation) => (
              <div key={recommendation.id} className="p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    {recommendation.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {recommendation.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default RecommendationSlider;
