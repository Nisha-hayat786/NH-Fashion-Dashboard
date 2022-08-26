import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import "../NewMembers/newMember.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { userRequest } from "../../Redux/requestMethods";

const NewMembers = (props) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  const stringToColor = (string) => {
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
  
  const stringAvatar = (name) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 56,
        height: 56,
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }


  return (
    <div className="mx-5 my-4">
      {users.map((user) => (
      <div className="row d-flex align-items-center pb-3" key={user._id}>
        <div className="col-md-3">
          <Avatar
            {...stringAvatar (user.username)} 
          />
        </div>
        <div className="col-md-6">
          <h6 className="fw-bold fs-6 text-black mb-1">{user.username}</h6>
          <p className="text-black-50 mb-0"></p>
        </div>
        <div className="col-md-3 p-1">
          <Link to="/" className="display text-black-50">
            <VisibilityIcon sx={{ fontSize: 20 }} /> View
          </Link>
        </div>
      </div>
      ))}
    </div>
  );
};

export default NewMembers;
