import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);

  const { data, isPending: adminLoading } = useQuery({
    queryKey: ["usersAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios(
        `http://localhost:5000/users/admin/${user.email}`
      );
      return res.data;
    },
  });
  // console.log("alhamdulillah data is maybbe true", data);

  return [data, adminLoading];
};

export default useAdmin;
