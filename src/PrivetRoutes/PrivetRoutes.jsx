import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  // $&

  if (loading) {
    return <p>Privet Loaing....</p>;
  }

  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivetRoutes;
