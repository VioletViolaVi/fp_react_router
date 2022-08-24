import React from "react";
import { useParams } from "react-router-dom";

function Cohort() {
  /* same thing */
  const params = useParams();
  const { fishFingers } = useParams();

  return (
    <>
      {/* same thing */}
      <h1>{params.fishFingers}</h1>
      <h2>{fishFingers}</h2>
    </>
  );
}

export default Cohort;
