import React from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import "../NewMembers/newMember.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

const NewMembers = (props) => {


  function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 56,
        height: 56,
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }


  return (
    <div className="mx-5 my-4">
      <div className="row d-flex align-items-center">
        <div className="col-md-3">
          <Avatar
            {...stringAvatar("Huzaifa Saleem")} 
          />
        </div>
        <div className="col-md-6">
          <h6 className="fw-bold fs-6 text-black mb-1">{props.name}</h6>
          <p className="text-black-50 mb-0">{props.field}</p>
        </div>
        <div className="col-md-3 p-1">
          <Link to="/" className="display text-black-50">
            <VisibilityIcon sx={{ fontSize: 20 }} /> View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewMembers;
