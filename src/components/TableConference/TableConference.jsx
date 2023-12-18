import React from "react";
import "./tableConference.css";

const TableConference = ({ data, selectedClass }) => {
    const filteredData = data.find((item) => item.class === selectedClass);

    if (!filteredData) {
      return null; // or return an empty component
    }

  return (
    <table className="tableConference">
      <thead>
        <tr>
          <th className="tableConference_head">Назва предмету</th>
          <th className="tableConference_head">
            Посилання для підключення до конференції
          </th>
          <th className="tableConference_head">Ідентифікатор конференції</th>
          <th className="tableConference_head">Код доступу</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.subjects.map((subject) => (
          <tr
            className="tableConference_tr"
            key={`${filteredData.class}-${subject.name}`}
          >
            <td className="tableConference_td">{subject.name}</td>
            <td className="tableConference_td">
              {subject.conference ? (
                <a
                  href={subject.conference}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-video-camera" aria-hidden="true"></i>
                  <span className="download-text">Зайти на онлайн-урок</span>
                </a>
              ) : (
                "Немає посилання"
              )}
            </td>
            <td className="tableConference_td">{subject.identifier || "-"}</td>
            <td className="tableConference_td">{subject.access || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableConference;
