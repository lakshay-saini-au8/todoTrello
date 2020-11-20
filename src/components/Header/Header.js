import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <i
        className="fa fa-pencil-square"
        style={{ fontSize: "30px", paddingRight: "20px", color: "#7852ff" }}
      ></i>
      <h2>TODO Board</h2>
    </div>
  );
};

export default Header;
