import React, { useState } from "react";

const WorkingHoursDisplay = ({ doctorData }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const getWorkingHours = (selectedDate) => {
    if (!selectedDate) {
      return null; // Return null if no date is selected
    }

    const dayOfWeek = new Date(selectedDate).toLocaleDateString("en-US", {
      weekday: "long",
    });

    console.log("dayOfWeek",dayOfWeek);

    const drData=doctorData.openForWor;
    console.log(drData,doctorData);

    return drData.dayOfWeek || null;
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const workingHours = getWorkingHours(selectedDate);
  console.log(workingHours);

  return (
    <div>
      <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
        Select Dateee:
      </label>
      <input
        type="date"
        id="date"
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleDateChange}
      />

      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Working Hours:</h2>
        {workingHours ? (
          <div>
            <p>
              <strong>From:</strong> {workingHours.from}
            </p>
            <p>
              <strong>To:</strong> {workingHours.to}
            </p>
          </div>
        ) : (
          <p>No working hours available for the selected date.</p>
        )}
      </div>
    </div>
  );
};

export default WorkingHoursDisplay;
