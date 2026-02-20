import {
     LineChart,
     Line,
     XAxis,
     YAxis,
     Tooltip,
     ResponsiveContainer
} from "recharts";

const WeeklyRevenueChart = ({ data }) => {

     return (
          <div className="bg-base-200 p-5 rounded-xl">
               <h2 className="font-bold mb-4">Weekly Revenue</h2>

               <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                         <XAxis dataKey="week" />
                         <YAxis />
                         <Tooltip />
                         <Line
                              type="monotone"
                              dataKey="revenue"
                              stroke="#ff0000"
                         />
                    </LineChart>
               </ResponsiveContainer>
          </div>
     );
};

export default WeeklyRevenueChart;