import React, { useState } from "react";
import "./tableSchedule.css";

const TableSchedule = ({
  scheduleData,
  selectedClass,
  selectedDay,
  tableRef,
}) => {
  const [showAll, setShowAll] = useState(false);
  const classSchedule = scheduleData[selectedClass];
  if (!classSchedule) {
    return null;
  }

  const weekdays = Object.keys(classSchedule);

  let maxLessonCount = 0;
  for (const weekday of weekdays) {
    const lessonsCount = classSchedule[weekday].length;
    if (lessonsCount > maxLessonCount) {
      maxLessonCount = lessonsCount;
    }
  }

  const lessons = [...new Array(maxLessonCount)].map((_, index) => index + 1);
  const buttonText = showAll
    ? "Показати розклад на один день тижня"
    : "Показати розклад на весь тиждень";

  return (
    <div className="tableschedule-container">
      <button
        className="primary-btn schedule"
        onClick={() => setShowAll(!showAll)}
      >
        {buttonText}
        <i class="fa fa-fw fa-calendar"></i>
      </button>
      <table className="tableSchedule" ref={tableRef}>
        <thead className="tableSchedule_head">
          <tr>
            <th
              className="tableSchedule_head"
              colSpan={showAll ? weekdays.length + 1 : 2}
            >
              {selectedClass}
            </th>
          </tr>
          <tr>
            <th className="tableSchedule_head">Номер урока</th>
            {weekdays.map(
              (weekday, index) =>
                (showAll || weekday === selectedDay) && (
                  <th className="tableSchedule_head" key={index}>
                    {weekday}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson) => (
            <tr className="tableSchedule_tr" key={lesson}>
              <td className="tableSchedule_td">{lesson}</td>
              {weekdays.map(
                (weekday, index) =>
                  (showAll || weekday === selectedDay) && (
                    <td className="tableSchedule_td" key={index}>
                      {lesson <= classSchedule[weekday].length
                        ? classSchedule[weekday][lesson - 1]
                        : null}
                    </td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSchedule;
