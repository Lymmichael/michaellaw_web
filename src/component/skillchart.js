import React, { useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
    {
        name: "React.js",
        skills: 4,
      },
      {
        name: "Typescript",
        skills: 4,
      },
      {
        name: "SQL",
        skills: 4,
      },
      {
        name: "Cypress",
        skills: 3,
      },
      {
        name: "Node.js",
        skills: 3,
      },
      {
        name: "vue.js",
        skills: 1,
      },
      {
        name: "python",
        skills: 3,
      },
      {
        name: "C",
        skills: 3,
      },
      {
        name: ".NET",
        skills: 2,
      },{
        name: "C#",
        skills: 2,
      },
      {
        name: "Java",
        skills: 3,
      },
      {
        name: "Serverless Stack(sst)",
        skills: 1,
      },
      {
        name: "C++",
        skills: 2,
      },
      {
        name: "AWS",
        skills: 1,
      },
                                      
];
export default function SkillChart() {
    const [activeBar, setActiveBar] = useState(null);
  
    const handleMouseEnter = (entry, index) => {
      setActiveBar(index);
    };
  
    const handleMouseLeave = () => {
      setActiveBar(null);
    };
  
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis label={{ value: "Rate", angle: -90, position: "insideLeft"}} domain={[0, 5]}/>
          <Tooltip />
          <Bar
            dataKey="skills"
            fill="#004080"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            opacity={(index) => (activeBar === null || activeBar === index) ? 1 : 0.2}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }