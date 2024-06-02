import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Singup from "../Pages/Singup/Singup";
import Login from "./../Pages/Login/Login";
import Deshboard from "./../Deshboard/Deshboard";
import UserProfile from "../Deshboard/UserDeshboardPages/UserProfile";
import UserAppoinments from "../Deshboard/UserDeshboardPages/UserAppoinments";
import UserTestResult from "../Deshboard/UserDeshboardPages/UserTestResult";
import AllUser from "../Deshboard/AdminDeshboardPages/AllUser";
import AddTest from "../Deshboard/AdminDeshboardPages/AddTest";
import AllTest from "../Deshboard/AdminDeshboardPages/AllTest";
import Reservation from "../Deshboard/AdminDeshboardPages/Reservation";
import AddBanner from "../Deshboard/AdminDeshboardPages/AddBanner";
import AllBanner from './../Deshboard/AdminDeshboardPages/AllBanner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/singup",
        element: <Singup></Singup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "deshboard",
    element: <Deshboard></Deshboard>,
    children: [
      {
        path: "userprofile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "userappoinment",
        element: <UserAppoinments></UserAppoinments>,
      },
      {
        path: "testresult",
        element: <UserTestResult></UserTestResult>,
      },
      {
        path: "alluser",
        element: <AllUser></AllUser>,
      },
      {
        path: "addtest",
        element: <AddTest></AddTest>,
      },
      {
      path: "alltest",
        element: <AllTest></AllTest>,
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "addbanner",
        element: <AddBanner></AddBanner>,
      },
      {
        path: "allbanner",
        element: <AllBanner></AllBanner>,
      },
    ],
  },
]);

export default router;
