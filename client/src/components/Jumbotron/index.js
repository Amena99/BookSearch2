import React from "react";
import "./style.css";
import Button from "../Button";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron">
      <div className="container">
      {children}
      <p className="main-text">The Bibliophile's Oasis</p>
      <p id="subtext">Search thousands of books.<br></br>Save your favorites to access later.</p>
    <p className="searchforbooksbtn" >
    <Button type="light" className="info searchbutton">Search for Books!</Button></p>
      </div> 
    </div>
  );
}

export default Jumbotron;
