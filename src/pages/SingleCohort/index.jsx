import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleCohort() {
  const { fishFingers } = useParams();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://raw.githubusercontent.com/getfutureproof/fp_study_notes_hello_github/main/${fishFingers}/roster.json`
      );
      const json = await data.json();
      setStudents(json.students);
    }
    fetchData();
  }, [fishFingers]);

  return (
    <>
      <h1>{fishFingers}</h1>
      {students.map((s) => (
        <p key={s.github}>{s.name}</p>
      ))}
    </>
  );
}

// Basic Version:

// import React from "react";
// import { useParams } from "react-router-dom";

// function SingleCohort() {
//   /* same thing */
//   const params = useParams();
//   const { fishFingers } = useParams();

//   return (
//     <>
//       {/* same thing */}
//       <h1>{params.fishFingers}</h1>
//       <h2>{fishFingers}</h2>
//     </>
//   );
// }

// export default SingleCohort;
