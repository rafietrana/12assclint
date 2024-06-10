import About from "../../Component/About/About";

import FeturedTest from "../../Component/FeturedTest/FeturedTest";
import Promotion from "../../Component/Promotion/Promotion";
import PromotionSection from "../../Component/PromotionSection/PromotionSection";
import Slider from "../../Component/Slider/Slider";
import UseAdmin from "../../Hooks/UseAdmin";
import useAuth from "../../Hooks/useAuth";
import UserDeshboardAcces from "../../PrivetRoute/UserDeshboardAcces";
import Footer from "../../Shyerd/Footer/Footer";
import RecommendationSlider from "./../../Component/RecommendationSlider/RecommendationSlider";

const Home = () => {
  const { user } = useAuth();
  const [datas] = UseAdmin();
  console.log("alhamdulillah user from ", user);

  console.log("alhamdulillah datas is ", datas);
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <Promotion></Promotion>
      <PromotionSection></PromotionSection>
      <RecommendationSlider></RecommendationSlider>
      <FeturedTest></FeturedTest>
      <Footer></Footer>
      <UserDeshboardAcces></UserDeshboardAcces>
    </div>
  );
};

export default Home;
