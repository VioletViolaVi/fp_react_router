import React from "react";
import { Link, Outlet } from "react-router-dom";

function AllCohorts() {
  return (
    <>
      <Link to="bhatia">Bhatia</Link>
      <br />
      <Link to="rincon">Rincon</Link>
      <Outlet />
    </>
  );
}

export default AllCohorts;
