import React from "react";
import "./tableCourses.css";

const TableCourses = ({ data, selectedClass, tableRef }) => {
  const filteredData = data.find((item) => item.class === selectedClass);

  if (!filteredData) {
    return (
      <div>
        <p className="tableCourses_title">
          Ви не обрали клас для відображення даних
        </p>
      </div>
    );
  }

  return (
    <table className="tableCourses" ref={tableRef}>
      <thead>
        <tr>
          <th className="tableCourses_head">Назва предмету</th>
          <th className="tableCourses_head">Код предмету на Google Classroom</th>
          <th className="tableCourses_head">Вчитель</th>
          <th className="tableCourses_head">Email</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.subjects.map((subject) => (
          <tr className="tableCourses_tr" key={subject.name}>
            <td className="tableCourses_td">{subject.name}</td>
            <td className="tableCourses_td">{subject.code}</td>
            <td className="tableCourses_td">{subject.teacher}</td>
            <td className="tableCourses_td email-cell">{subject.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCourses;
