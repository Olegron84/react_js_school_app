import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Back from "../../components/Back/Back";
import Dropdown from "../../components/Dropdown/Dropdown";
import TableSchedule from "../../components/TableSchedule/TableSchedule";
import DayFilter from "../../components/DayFilter/DayFilter";
import "./schedule.css";

const Schedule = () => {
  const [scheduleData, setScheduleData] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const tableRef = useRef(null);

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        const response = await axios.get("/data/scheduleData.json");
        setScheduleData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchScheduleData();
  }, []);

  useEffect(() => {
    if (tableRef.current && selectedDay) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedDay]);

  const handleClassChange = (selectedValue) => {
    setSelectedClass(selectedValue);
    setSelectedDay(Object.keys(scheduleData[selectedValue])[0]);
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  if (!scheduleData) {
    return <div></div>;
  }

  return (
    <>
      <Back title="Розклад уроків" />
      <section className="schedule">
        <div className="container scheduleFlex">
          <Dropdown
            options={Object.keys(scheduleData).map((className) => ({
              value: className,
              label: className,
            }))}
            onChange={handleClassChange}
            title="Оберіть клас"
          />
          {selectedClass && scheduleData[selectedClass] && (
            <>
              <DayFilter
                selectedDay={selectedDay}
                weekdays={Object.keys(scheduleData[selectedClass])}
                onDayChange={handleDayChange}
              />
              <TableSchedule
                scheduleData={scheduleData}
                selectedClass={selectedClass}
                selectedDay={selectedDay}
                tableRef={tableRef}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Schedule;
