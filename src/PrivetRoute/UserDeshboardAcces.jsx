import axios from "axios";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

const UserDeshboardAcces = ({ children }) => {
  const { user, loading } = useAuth();

  const { data: isDeshboard, isLoading } = useQuery({
    queryKey: ["isDeshboard"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios(
        `https://my-ass-12-server.vercel.app/getloginuser/${user.email}`
      );
      return res.data;
    },
  });

  // console.log("alhamdulilah isDeshboard is", isDeshboard);
  if (isLoading) {
    return (
      <p>
        Loading.........if this is not close automaticly please Reload mannually
      </p>
    );
  }

  if (isDeshboard?.userStatus == "blocked" && "role" in isDeshboard == false) {
    return <Navigate to={"/"}></Navigate>;
  }

  return children;
};

export default UserDeshboardAcces;
