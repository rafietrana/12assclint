 

import About from "../../Component/About/About";
import AppoinmentContact from "../../Component/AppoinmentContact/AppoinmentContact";

import ChooseMe from "../../Component/ChooseMe/ChooseMe";
import Counter from "../../Component/Counter/Counter";
import DoctorProfessional from "../../Component/DoctorProfessional/DoctorProfessional";
// import FeturedTest from "../../Component/FeturedTest/FeturedTest";
 
import Services from "../../Component/Services/Services";
import Slider from "../../Component/Slider/Slider";
import useAuth from "../../Hooks/useAuth";
 
 
import Footer from "../../Shyerd/Footer/Footer";
import FeturedTest from './../../Component/FeturedTest/FeturedTest';
  

const Home = () => {
      const {user} = useAuth()
return (
    <div  >
      <Slider></Slider>
      <About></About>
      <Services></Services>
 
      <ChooseMe></ChooseMe>
      <Counter></Counter>
      <DoctorProfessional></DoctorProfessional>
      <AppoinmentContact></AppoinmentContact>
      
 
        {
        user   &&       <FeturedTest></FeturedTest>
      }   
 

      <Footer></Footer>
   
    </div>
  );
};

export default Home;
