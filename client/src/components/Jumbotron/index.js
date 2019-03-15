import React from "react";
import "./style.css";
import Button from "../Button";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron">
      {children}
      <p className="main-text">The Bibliophile's Oasis</p>
              
      <p id="subtext"><br/>Search thousands of books.</p>
              
      <p id="subtext"><br/>Save your favorites to access or purchase later.</p>
    
    
    <p className="searchforbooksbtn" ><Button type="light" className="info">Search for Books!</Button></p>
    </div>
  );
}

export default Jumbotron;
