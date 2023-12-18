import React from "react";
import Back from "../../components/Back/Back";
import BellsCard from "./BellsCard";
import TableBells from "../../components/TableBells/TableBells";

const Bells = () => {
  return (
    <>
      <Back title="Розклад дзвоників" />
      <BellsCard />
      <TableBells />
    </>
  );
};

export default Bells;
