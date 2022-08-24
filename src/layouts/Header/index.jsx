import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Header() {
  let activeStyle = {
    textDecoration: "underline"
  };

  return (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>

      <NavLink
        to="cohorts"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        All Cohorts
      </NavLink>
      
      <NavLink
        to="about"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        About Us
      </NavLink>
      <br />
      <br />
      <Outlet />
    </>
  );
}

export default Header;
