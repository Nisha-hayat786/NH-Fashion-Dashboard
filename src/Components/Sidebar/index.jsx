import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PaidIcon from "@mui/icons-material/Paid";
import AssessmentIcon from "@mui/icons-material/Assessment";
import "../Sidebar/sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="d-flex flex-column sidebar fixed-top">
        <h6 className="fs-6 fw-bold text-black mt-5 pt-2 pb-0 ms-4">
          Dashboard
        </h6>
        <NavLink to="/">
          <HomeIcon /> &nbsp; &nbsp; Home
        </NavLink>
        <NavLink to="/analytics">
          <TimelineIcon /> &nbsp; &nbsp; Analytics
        </NavLink>
        <NavLink to="/sales">
          <TrendingUpIcon /> &nbsp; &nbsp; Sales
        </NavLink>
        <h6 className="fs-6 fw-bold text-black pt-4 pb-0 ms-4">Quick Menu</h6>
        <NavLink to="/userList">
          <PersonIcon /> &nbsp; &nbsp; Users
        </NavLink>
        <NavLink to="/productList">
          <Inventory2Icon /> &nbsp; &nbsp; Products
        </NavLink>
        <NavLink to="/transactions">
          <PaidIcon /> &nbsp; &nbsp; Transactions
        </NavLink>
        <NavLink to="/reports">
          <AssessmentIcon /> &nbsp; &nbsp; Reports
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
