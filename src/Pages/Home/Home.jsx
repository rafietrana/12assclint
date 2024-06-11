 

import About from "../../Component/About/About";
import FeturedTest from "../../Component/FeturedTest/FeturedTest";
import Promotion from "../../Component/Promotion/Promotion";
import PromotionSection from "../../Component/PromotionSection/PromotionSection";
import Slider from "../../Component/Slider/Slider";
import useAuth from "../../Hooks/useAuth";
 
 
import Footer from "../../Shyerd/Footer/Footer";
 
import RecommendationSlider from "./../../Component/RecommendationSlider/RecommendationSlider";

const Home = () => {
    const {user} = useAuth()
  return (
    <div>
      <Slider></Slider>
      <About></About>
  
      <Promotion></Promotion>
      <PromotionSection></PromotionSection>
      <RecommendationSlider></RecommendationSlider>
      {
        user   &&       <FeturedTest></FeturedTest>
      }
 

      <Footer></Footer>
   
    </div>
  );
};

export default Home;
