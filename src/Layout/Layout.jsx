import { Outlet } from "react-router-dom";
import Navbar from "../Shyerd/Navbar";

 

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
