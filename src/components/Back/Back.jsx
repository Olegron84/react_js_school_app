import React from "react";

import Clouds from "../Clouds/Clouds";

const Back = ({ title }) => {
  return (
    <>
      <section className="back">
        <h1>{title}</h1>
        <Clouds />
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Back;
