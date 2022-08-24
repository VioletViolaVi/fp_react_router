import React from "react";
import {useParams} from "react-router-dom";

function Cohort() {

    const params = useParams();

    return (
        <h1>  
            {params.fishFingers}
        </h1>
    );
  }
  
  export default Cohort;

