import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Navigation = () => {
  const [click, setClick] = useState(false);
  return (
    <header>
      <nav className="header_nav">
        <div
          className={click ? "mobile-nav" : "wrapper_link"}
          onClick={() => setClick(false)}
        >
          <Link className="navigation_link" to="/">
            Головна
          </Link>
          <Link className="navigation_link" to="/about">
            Як організувати онлайн-навчання
          </Link>
          <Link className="navigation_link" to="/bells">
            Розклад дзвоників
          </Link>
          <Link className="navigation_link" to="/schedule">
            Розклад уроків
          </Link>
          <Link className="navigation_link" to="/courses">
            Посилання на курси Google Classroom та онлайн-конференції
          </Link>
          <Link className="navigation_link" to="/books">
            Підручники
          </Link>
          <Link className="navigation_link" to="/contacts">
            Контакти
          </Link>
        </div>
        <div className="start">
          <a
            href="https://testportal.gov.ua/osnovne-pro-nmt-2023/"
            className="button_zno"
          >
            ГОТУЄМОСЬ ДО ЗНО
          </a>
        </div>
        <button className="toggle" onClick={() => setClick(!click)}>
          {click ? (
            <i className="fa fa-times"> </i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navigation;
