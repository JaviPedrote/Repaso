import React from "react";
import { PieChart, Pie, Cell} from "recharts";

interface GraficoComponentProps {
  total: number;
  wins: number;
  losses: number;
}

export const GraficoComponent: React.FC<GraficoComponentProps> = ({ total, wins, losses }) => {
  const data = [
    { name: "Victorias", value: wins },
    { name: "Derrotas", value: losses },
  ];

  const COLORS = ["#ff6a6a", "#e51d1d"]; // Negro para ganados, Blanco para perdidos

  return (
    <div className="absolute ">
      <PieChart width={350} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60} // Hace el gráfico hueco
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, value }) => `${name}: ${value}`}
          startAngle={90} endAngle={-270}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
