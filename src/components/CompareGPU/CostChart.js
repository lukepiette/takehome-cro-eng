// components/CostChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px' }}>
        <p>{`Batch Size: ${label}`}</p>
        {payload.map((entry) => (
          <p key={entry.name} style={{ color: entry.fill }}>
            {`${entry.name}: $${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function CostChart({ firstGPUData, secondGPUData }) {
  // Ensure costData exists for both GPUs
  if (!firstGPUData?.costData || !secondGPUData?.costData) {
    return <div>No cost data available for comparison.</div>;
  }

  // Combine both GPUs' cost data by batchSize
  const combinedData = firstGPUData.costData.map((dataPoint, index) => ({
    batchSize: dataPoint.batchSize,
    [firstGPUData.name]: dataPoint.cost,
    [secondGPUData.name]: secondGPUData.costData[index]?.cost || 0, // Handle missing data by using 0
  }));

  return (
    <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto' }}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={combinedData}
          margin={{
            top: 30, right: 30, left: 20, bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="batchSize" label={{ value: 'Batch Size', position: 'insideBottom', offset: -10 }} />
          <YAxis label={{ value: 'Cost ($)', angle: -90, position: 'insideLeft' }} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} /> {/* Remove gray background on hover */}
          <Legend verticalAlign="top" />

          {/* First GPU Bar */}
          <Bar dataKey={firstGPUData.name} fill="#4287f5" name={`${firstGPUData.name}`}>
            <LabelList
              dataKey={firstGPUData.name}
              position="top"
              formatter={(value) => `$${value.toFixed(2)}`}
              fill="#000000"
              fontSize={10}
            />
          </Bar>

          {/* Second GPU Bar */}
          <Bar dataKey={secondGPUData.name} fill="#f54242" name={`${secondGPUData.name}`}>
            <LabelList
              dataKey={secondGPUData.name}
              position="top"
              formatter={(value) => `$${value.toFixed(2)}`}
              fill="#000000"
              fontSize={10}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
