import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
// import Singup from "../Pages/Singup/Singup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/singup",
      //   element:  <Singup></Singup>,
      // },
    ],
  },
]);

export default router;
