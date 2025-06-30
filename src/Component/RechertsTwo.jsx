import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#FF8042", "#0088FE"];

const RechertsTwo = () => {
  const { data: reserve = [] } = useQuery({
    queryKey: ["reserve"],
    queryFn: () =>
      axios("https://my-ass-12-server.vercel.app/getreserve").then(
        (res) => res.data
      ),
  });

  const data = [
    {
      name: "Pending",
      value: reserve.filter((r) => r.reportStatus === "Pending").length,
    },
    {
      name: "Completed",
      value: reserve.filter((r) => r.reportStatus === "delivered").length,
    },
  ];

  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius="80%"
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RechertsTwo;
