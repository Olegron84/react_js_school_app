import React, { useState, useEffect, useRef } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import TableCourses from "../../components/TableCourses/TableCourses";
import TableConference from "../../components/TableConference/TableConference";
import Back from "../../components/Back/Back";
import "./courses.css";

const Courses = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [coursesData, setCoursesData] = useState(null);
  const tableRef = useRef(null);

  const handleDropdownChange = (selectedValue) => {
    setSelectedClass(selectedValue);
  };

  const options = coursesData?.map((classItem) => ({
    value: classItem.class,
    label: classItem.class,
  }));

  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        const response = await fetch("/data/coursesData.json");
        const data = await response.json();
        console.log(data);
        setCoursesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCoursesData();
  }, []);

  useEffect(() => {
    if (tableRef.current && selectedClass) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedClass]);

  return (
    <>
      <Back title="Посилання на курси Google Classroom" />
      <section className="courses">
        <div className="container coursesFlex">
          <div className="grid2">
            <div className="courses_left">
              <img src="/images/courses/courses1.jpg" alt="" />
            </div>
            <div className="courses_right">
              {options && (
                <Dropdown
                  options={options}
                  title="Оберіть клас"
                  onChange={handleDropdownChange}
                />
              )}
            </div>
          </div>
          <TableCourses
            tableRef={tableRef}
            selectedClass={selectedClass}
            data={coursesData || []}
          />
          <TableConference  selectedClass={selectedClass}
            data={coursesData || []}/>
        </div>
      </section>
    </>
  );
};

export default Courses;
