import React, { useState } from "react";
import { useSelector } from "react-redux";

const Students = () => {
  const state = useSelector((state) => state);

  return (
    <div>
      <h2>NO of Students : {state.noOfItems}</h2>
    </div>
  );
};

export default Students;
