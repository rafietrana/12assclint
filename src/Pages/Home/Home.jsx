 

import About from "../../Component/About/About";
import BookAnAppoinment from "../../Component/BookAnAppoinment/BookAnAppoinment";
import ChooseMe from "../../Component/ChooseMe/ChooseMe";
import Counter from "../../Component/Counter/Counter";
import DoctorProfessional from "../../Component/DoctorProfessional/DoctorProfessional";
// import FeturedTest from "../../Component/FeturedTest/FeturedTest";
 
import Services from "../../Component/Services/Services";
import Slider from "../../Component/Slider/Slider";
// import useAuth from "../../Hooks/useAuth";
 
 
import Footer from "../../Shyerd/Footer/Footer";
  

const Home = () => {
      // const {user} = useAuth()
return (
    <div>
      <Slider></Slider>
      <About></About>
      <Services></Services>
      <BookAnAppoinment></BookAnAppoinment>
      <ChooseMe></ChooseMe>
      <Counter></Counter>
      <DoctorProfessional></DoctorProfessional>
      
 
      {/* {
        user   &&       <FeturedTest></FeturedTest>
      } */}
 

      <Footer></Footer>
   
    </div>
  );
};

export default Home;
