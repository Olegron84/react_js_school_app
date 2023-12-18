import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./bells.css";

const BellsCard = () => {
  const location = useLocation();
  const from = location.state?.from || "calls";
  const [lessonTimeData, setLessonTimeData] = useState([]);

  useEffect(() => {
    const fetchLessonTimeData = async () => {
      try {
        const response = await fetch("/data/lessonTimeData.json");
        const data = await response.json();
        setLessonTimeData(data);
      } catch (error) {
        console.error("Error fetching lessonTimeData.json:", error);
      }
    };
    fetchLessonTimeData();
  }, []);

  return (
    <div>
      <section className="bells">
        <div className="container flexSB">
          <div className="left row">
            <img src="/images/about.webp" alt="" />
          </div>
          <div className="right row">
            <div className="items">
              {lessonTimeData.map(({ id, cover, title }) => (
                <Link
                  to={`tablebells/${id}`}
                  key={id}
                  state={{ from }}
                  className="item itemflex"
                >
                  <div className="img">
                    <img src={cover} alt="" />
                  </div>
                  <div className="text">
                    <h2>{title}</h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BellsCard;
