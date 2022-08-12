import React from "react";
import "../LatestTransactions/transaction.css";
import Avatar from "@mui/material/Avatar";

const LatestTransactions = (props) => {
  function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

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
        width: 50,
        height: 50,
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  const Button = ({ type }) => {
    return <button className={"button" + type}>{type}</button>;
  };

  return (
    <div className="mx-5 my-4">
      <div className="d-flex align-items-center">
        <div className="col-md-4 d-flex align-items-center">
          <Avatar {...stringAvatar("Huzaifa Saleem")} />
          <p className="fs-6 text-black mb-0 ms-3">{props.name}</p>
        </div>
        <p className="col-md-3 fs-6 text-black mb-0 d-flex justify-content-center">
          12-May-2022
        </p>
        <p className="col-md-2 fs-6 text-black mb-0 d-flex justify-content-center">
          {props.amount}
        </p>
        <div className="col-md-2 d-flex justify-content-end">
          <Button type={props.type} />
        </div>
      </div>
    </div>
  );
};

export default LatestTransactions;
