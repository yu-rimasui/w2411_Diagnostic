import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="header-logo">
        Diagnostic
        </Link>
        {/* <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/question1">Question1</Link>
          <Link to="/question2">Question2</Link>
        </nav> */}
      </div>
    </header>
  );
}

export default Header;
