import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "https://my-ass-12-server.vercel.app/",
});

const useAxiosSecuree = () => {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);
  // $&

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // $&
      config.headers.authorization = `Bearer ${token}`;

      if (["post", "put", "delete", "patch"].includes(config.method)) {
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
      // $&
      return response;
    },
    async function (error) {
      const status = error.response.status;
      // $&

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
