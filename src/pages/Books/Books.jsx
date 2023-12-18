import React, { useState, useEffect, useRef } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Back from "../../components/Back/Back";
import TableBooks from "../../components/TableBooks/TableBooks";
import "./books.css";

const Books = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [booksData, setBooksData] = useState(null);
  const tableRef = useRef(null);

  const handleDropdownChange = (selectedValue) => {
    setSelectedClass(selectedValue);
  };

  const options = booksData?.map((classItem) => ({
    value: classItem.class,
    label: classItem.class,
  }));

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        const response = await fetch("/data/booksData.json");
        const data = await response.json();
        console.log(data);
        setBooksData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBooksData();
  }, []);

  useEffect(() => {
    if (tableRef.current && selectedClass) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedClass]);
  return (
    <>
      <Back title="Електронні версії підручників" />
      <section className="books">
        <div className="container booksFlex">
          <div className="grid2">
            <div className="books_left">
              <img src="/images/books/books.jpg" alt="" />
            </div>
            <div className="books_right">
              {options && (
                <Dropdown
                  options={options}
                  title="Оберіть клас"
                  onChange={handleDropdownChange}
                />
              )}
            </div>
          </div>
          <TableBooks
            tableRef={tableRef}
            selectedClass={selectedClass}
            data={booksData || []}
          />
        </div>
      </section>
    </>
  );
};

export default Books;
