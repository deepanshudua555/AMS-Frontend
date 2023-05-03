import React from "react";

const Timetable = () => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const times = ["9:30", "10:20", "11:10", "12:00", "Break", "13:40", "14:30", "15:20", "16:10", "17:00"];

    return (
        <table className="border-collapse border border-gray-500 mx-auto m-24 w-3/4 h-96">
            <thead>
                <tr>
                <th className="border border-gray-500"></th>
                {times.map((time) => (
                    <th key={time} className="border border-gray-500 text-center uppercase font-semibold w-32">
                    {time}
                    </th>
                ))}
                </tr>
            </thead>
            <tbody>
                {days.map((day) => (
                <tr key={day}>
                    <td className="border border-gray-500 text-center font-semibold">{day}</td>
                    {times.map((time) => (
                        <td key={`${day}-${time}`} className="border border-gray-500"></td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Timetable;
