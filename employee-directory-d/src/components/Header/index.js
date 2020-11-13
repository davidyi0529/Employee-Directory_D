import React from "react";
import "./style.css";

function Header() {
  return (
    <footer className="header">
      <span>LinkedUp { new Date().getFullYear() }</span>
    </footer>
  );
}

export default Header;