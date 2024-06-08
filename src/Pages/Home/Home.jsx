import About from "../../Component/About/About";
import Recommandation from "../../Component/About/Recommandation/Recommandation";
import Promotion from "../../Component/Promotion/Promotion";
import PromotionSection from "../../Component/PromotionSection/PromotionSection";
import Slider from "../../Component/Slider/Slider";
import useAuth from "../../Hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  console.log("alhamdulillah user from ", user);
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <Promotion></Promotion>
      <PromotionSection></PromotionSection>
      <Recommandation></Recommandation>
    </div>
  );
};

export default Home;
