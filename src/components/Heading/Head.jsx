import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>КЗ "ХАРКІВСЬКИЙ ЛІЦЕЙ №140"</h1>
            <span>ХАРКІВСЬКОЇ МІСЬКОЇ РАДИ</span>
          </div>
          <div className="social">
            <a
              href="https://www.facebook.com/groups/2421366434855904/"
              target="_blank"
              rel="noopener noreferrer"
              className="head_icon_link"
            >
              <i className="fab fa-facebook-f icon"></i>{" "}
            </a>
            <a
              href="http://school140.edu.kh.ua/"
              target="_blank"
              rel="noopener noreferrer"
              className="head_icon_link"
            >
              <i className="fa fa-university icon" aria-hidden="true"></i>{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
