import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer-padding">
          <div className="legal">
            <p>
              &#169; 2023 | All Rights Reserved | Developed with
              <span className="footer__icon">
                <i className="fa fa-heart"></i>
              </span>
              by Mariia Lutsenko & Oleg Ovcharov
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
