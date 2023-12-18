import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
import Title from "../../../components/Title/Title";
import Clouds from "../../../components/Clouds/Clouds";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title title="Платформа для організації навчання" />
            <div className="hero-button">
              <Link to="/schedule">
                <button className="primary-btn">
                  Розклад уроків <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </Link>
              <Link to="/courses">
                <button>
                  Коди курсів Google Classroom та посилання на онлайн-уроки{" "}
                  <i className="fa fa-long-arrow-alt-right"></i>
                </button>{" "}
              </Link>
            </div>
          </div>
          <Clouds />
        </div>
      </section>
      <div className="margin-hero"></div>
    </>
  );
};

export default Hero;
