import React, { useState } from 'react';

const CustomTable = () => {
  const [startTime, setStartTime] = useState('');
  const [stopTime, setStopTime] = useState('');
  const [tableData, setTableData] = useState([]);

  const generateTable = () => {
    const startHour = parseInt(startTime, 10);
    const stopHour = parseInt(stopTime, 10);

    if (startHour >= stopHour) {
      alert('Invalid time range. Please ensure the start time is before the stop time.');
      return;
    }

    const timeIntervals = [];
    for (let hour = startHour; hour < stopHour; hour++) {
      const nextHour = hour + 1;
      if (nextHour < stopHour) {
        const column = `${hour}-${nextHour}`;
        timeIntervals.push(column);
      }
    }

    setTableData(timeIntervals);
  };

  return (
    <div className="flex flex-col items-center relative">
      <label className="mb-2">
        Start Time:
        <input type="number" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      </label>
      <label className="mb-2">
        Stop Time:
        <input type="number" value={stopTime} onChange={(e) => setStopTime(e.target.value)} />
      </label>
      <button className="mb-4" onClick={generateTable}>
        Generate Table
      </button>

      {tableData.length > 0 && (
        <div className="w-1/2 relative">
          <table border="1" className="table-auto w-full">
            <thead>
              <tr>
                <th>Day/Time</th>
                {tableData.map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                <tr key={index}>
                  <td>{day}</td>
                  {tableData.map((column, columnIndex) => (
                    <td key={columnIndex}>{/* Your cell content here */}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CustomTable;
