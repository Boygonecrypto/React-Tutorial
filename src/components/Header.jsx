import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between items-center h-[80px] container">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="flex gap-3">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/Login" className="btn btn-accent">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
