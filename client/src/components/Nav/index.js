import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <span><a className="navbar-brand1" href="/books">saved books</a></span><span>|</span> 
      <span><a className="navbar-brand2" href="/search">search books</a></span>
    </nav>
  );
}

export default Nav;
