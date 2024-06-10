import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/",
});

const useAxiosSecurs = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("alhamdulillah request stopped by interseptor", token);
      config.headers.authorization = `Bearer ${token}`;

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  //     axios secure response user in the interceptor
  axiosSecure.interceptors.response.use(
    function (response) {
      // console.log("woow response stoped in the interceptor");
      return response;
    },
    async function (error) {
      const status = error.response.status;
      console.log("alhamdulillah errratus in the response", status);

      if (status == 401 || status == 403) {
        await logout();

        navigate("/login");
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecurs;
