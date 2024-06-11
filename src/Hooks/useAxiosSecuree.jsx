import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/",
});

const useAxiosSecuree = () => {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);
  console.log('alhamdulillah user from ', user);

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("alhamdulillah request stopped by interceptor", token);
      config.headers.authorization = `Bearer ${token}`;

      if (['post', 'put', 'delete', 'patch'].includes(config.method)) {
        if (!config.data) {
          config.data = {};
        }
        config.data.userEmail = user?.email;  
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      console.log("woow response stopped in the interceptor");
      return response;
    },
    async function (error) {
      const status = error.response.status;
      console.log("alhamdulillah erratus in the response", status);

      if (status === 401 || status === 403) {
        await logout();
        navigate("/login");
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecuree;
