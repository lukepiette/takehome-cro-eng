// components/ThroughputChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px' }}>
        <p>{`Batch Size: ${label}`}</p>
        {payload.map((entry) => (
          <p key={entry.name} style={{ color: entry.stroke }}>
            {`${entry.name}: ${entry.value} tok/s`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ThroughputChart({ firstGPUData, secondGPUData }) {
  // Ensure throughputData exists for both GPUs
  if (!firstGPUData?.throughputData || !secondGPUData?.throughputData) {
    return <div>No throughput data available for comparison.</div>;
  }

  // Combine both GPUs' throughput data by batchSize
  const combinedData = firstGPUData.throughputData.map((dataPoint, index) => ({
    batchSize: dataPoint.batchSize,
    [firstGPUData.name]: dataPoint.throughput,
    [secondGPUData.name]: secondGPUData.throughputData[index]?.throughput || 0, // Handle missing data by using 0
  }));

  return (
    <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto' }}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={combinedData}
          margin={{
            top: 20, right: 30, left: 20, bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="batchSize" label={{ value: 'Batch Size', position: 'insideBottom', offset: -10 }} />
          <YAxis label={{ value: 'Throughput (tok/s)', angle: -90, position: 'insideLeft' }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" />

          {/* First GPU Line */}
          <Line type="monotone" dataKey={firstGPUData.name} stroke="#4287f5" name={`${firstGPUData.name}`} />

          {/* Second GPU Line */}
          <Line type="monotone" dataKey={secondGPUData.name} stroke="#f54242" name={`${secondGPUData.name}`} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
