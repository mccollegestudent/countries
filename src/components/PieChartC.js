import React, { PureComponent } from 'react';
import { PieChart, Pie, ResponsiveContainer, Label } from 'recharts';

class PieChartC extends PureComponent {
  constructor() {
    super();
    this.state = {
      data01: [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ],
      data02: [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
      ],
    };
  }

  CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const { data01, data02 } = this.state;
    const data = data01[index] || data02[index];

    if (!data) {
      console.log("no data");
      return null;
    }

    const radius = innerRadius + (outerRadius - innerRadius) * 3;
    const x = (cx + radius * Math.cos(-midAngle * (Math.PI / 180))) ;
    const y = (cy + radius * Math.sin(-midAngle * (Math.PI / 180))) ;

    return (
      <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central" fontSize={10}>
        {`${data.name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  render() {
    const { data01, data02 } = this.state;

    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8">
            <Label content={this.CustomLabel} />
          </Pie> */}
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={20}
            fill="#82ca9d"
            label={this.CustomLabel}
          />
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={100}
            outerRadius={120}
            fill="#82ca9d"
            label={this.CustomLabel}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default PieChartC;
