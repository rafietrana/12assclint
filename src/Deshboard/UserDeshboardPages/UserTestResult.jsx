import axios from "axios";
import useAuth from "./../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const UserTestResult = () => {
  const { user } = useAuth();

  const { data: userTestResult = [] } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios(`http://localhost:5000/getusertestresult/${user?.email}`).then(
        (res) => {
          return res.data;
        }
      ),
  });
  console.log("alhamdulillah user test result is", userTestResult);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Test Name</th>
              <th>Test Date</th>
              <th>Status</th>
              <th>Result</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                {
                     userTestResult.map((resutlTestUser, idx) =>(
                      <tr key={resutlTestUser?._id}>
                      <th>{idx+1}</th>
                      <td>{resutlTestUser?.testname}</td>
                      <td>{resutlTestUser?.bookingDate}</td>
                      <td>{resutlTestUser?.reportStatus}</td>
                      <td>{resutlTestUser?.testResult   ? resutlTestUser?.testResult : <p>not Provide</p>}</td>
          
                    
                    </tr>
                     ))
                }

 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTestResult;
