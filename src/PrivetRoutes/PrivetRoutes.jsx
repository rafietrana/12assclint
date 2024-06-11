import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  console.log("alhamdulillah user and loading is", user, loading);

  if (loading) {
    return <p>Privet Loaing....</p>;
  }

  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivetRoutes;
