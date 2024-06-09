import About from "../../Component/About/About";

import FeturedTest from "../../Component/FeturedTest/FeturedTest";
import Promotion from "../../Component/Promotion/Promotion";
import PromotionSection from "../../Component/PromotionSection/PromotionSection";
import Slider from "../../Component/Slider/Slider";
import useAuth from "../../Hooks/useAuth";
import RecommendationSlider from "./../../Component/RecommendationSlider/RecommendationSlider";

const Home = () => {
  const { user } = useAuth();
  console.log("alhamdulillah user from ", user);
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <Promotion></Promotion>
      <PromotionSection></PromotionSection>
      <RecommendationSlider></RecommendationSlider>
      <FeturedTest></FeturedTest>
    </div>
  );
};

export default Home;
