import React, { useState, useEffect } from "react";
import "./tableBells.css";
import { useParams } from "react-router-dom";

const TableBells = () => {
  const { id } = useParams();
  const [classData, setClassData] = useState(null);
  useEffect(() => {
    const fetchTimeData = async () => {
      try {
        const response = await fetch("/data/lessonTimeData.json");
        const data = await response.json();
        const classData = data.find((classItem) => classItem.id === Number(id));
        if (classData) {
          setClassData(classData);
        }
      } catch (error) {
        console.error("Error fetching lessonTimeData.json:", error);
      }
    };
    fetchTimeData();
  }, [id]);

  if (!classData) {
    return <div></div>;
  }

  return (
    <table className="tableBells">
      <thead>
        <tr>
          <th className="tableBells_head">Номер уроку</th>
          <th className="tableBells_head">Початок</th>
          <th className="tableBells_head">Закінчення</th>
        </tr>
      </thead>

      <tbody>
        {classData.lessonDuration.map((item) => (
          <tr className="tableBells_tr" key={item.lessonNumber}>
            <td className="tableBells_td">{item.lessonNumber}</td>
            <td className="tableBells_td">{item.startTime}</td>
            <td className="tableBells_td">{item.endTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableBells;
