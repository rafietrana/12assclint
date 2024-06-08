import About from "../../Component/About/About";
import Slider from "../../Component/Slider/Slider";
import useAuth from "../../Hooks/useAuth";

const Home = () => {
  const {user} = useAuth()
  console.log('alhamdulillah user from ', user);
  return (
    <div>
      <Slider></Slider>
      <About></About>
    </div>
  );
};

export default Home;
