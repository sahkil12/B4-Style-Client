import {
     BarChart,
     Bar,
     XAxis,
     YAxis,
     Tooltip,
     ResponsiveContainer
} from "recharts";

const WeeklyOrdersChart = ({ data }) => {
     return (
          <div className="bg-base-200 p-5 rounded-xl">
               <h2 className="font-bold mb-4">Weekly Orders</h2>

               <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                         <XAxis dataKey="week" />
                         <YAxis />
                         <Tooltip />
                         <Bar
                              dataKey="orders"
                              fill="#ff0000"
                         />
                    </BarChart>
               </ResponsiveContainer>
          </div>
     );
};

export default WeeklyOrdersChart;