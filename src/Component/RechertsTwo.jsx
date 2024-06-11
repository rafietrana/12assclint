import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// Example reservation data
// const reservations = [
//   {
//     _id: "6666739ef326a78d247fdc96",
//     userName: "Abib",
//     userEmail: "abib@gmail.com",
//     transictionId: "pi_3PPyxFAcKSudQ7fg19eqrMKm",
//     testname: "Wash Body",
//     userPhoto: "https://i.ibb.co/gvNJgTG/portfolio-image-01.jpg",
//     reportStatus: "Pending",
//     bookingTime: "9:31:42",
//     bookingDate: "2024-06-10T03:31:42.868Z",
//   },
//   {
//     _id: "666689591bd537bec0be9205",
//     userName: "Ayon",
//     userEmail: "ayon@gmail.com",
//     transictionId: "pi_3PQ0OeAcKSudQ7fg0VI9eR1a",
//     testname: "Wash Body",
//     userPhoto: "https://i.ibb.co/D5NWvfp/Untitled-design.jpg",
//     reportStatus: "Completed",
//     bookingTime: "11:4:25",
//     bookingDate: "2024-06-10T05:04:25.791Z",
//   },
//   // Add more reservations as needed
// ];

// Prepare data for the chart

const COLORS = ["#FF8042", "#0088FE"];

const RechertsTwo = () => {
  const { data: reserve = [] } = useQuery({
    queryKey: ["reserve"],
    queryFn: () =>
      axios("https://my-ass-12-server.vercel.app/getreserve").then((res) => {
        return res.data;
      }),
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
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default RechertsTwo;
