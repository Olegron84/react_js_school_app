import React from "react";
import "./tableBooks.css";

const TableBooks = ({ data, selectedClass, tableRef }) => {
  const filteredData = data.find((item) => item.class === selectedClass);

  if (!filteredData) {
    return (
      <div>
        <p className="tableBooks_title">
          Ви не обрали клас для відображення даних
        </p>
      </div>
    );
  }
  return (
    <table className="tableBooks" ref={tableRef}>
      <thead>
        <tr>
          <th className="tableBooks_head">Назва предмету</th>
          <th className="tableBooks_head">Автор підручника</th>
          <th className="tableBooks_head">Посилання</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.subjects.map((subject) => (
          <tr className="tableBooks_tr" key={subject.name}>
            <td className="tableBooks_td">{subject.name}</td>
            <td className="tableBooks_td">{subject.author}</td>
            <td className="tableBooks_td">
              {" "}
              <a href={subject.link} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-download" aria-hidden="true"></i>
                <span className="download-text">Завантажити</span>
              </a>
            </td>{" "}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableBooks;
