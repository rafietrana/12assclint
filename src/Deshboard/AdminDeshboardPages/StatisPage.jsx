import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import RechertsTwo from "../../Component/RechertsTwo";

const StatisPage = () => {
  const { data: sortBookingData = [] } = useQuery({
    queryKey: ["sortBookingData"],
    queryFn: () =>
      axios("https://my-ass-12-server.vercel.app/getalltest").then((res) => {
        return res.data;
      }),
  });

  // // $&

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={sortBookingData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="testname" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div>
        <RechertsTwo></RechertsTwo>
      </div>
    </div>
  );
};

export default StatisPage;
