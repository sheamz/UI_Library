import { useState } from "react";
import './HomeTo.css';
import libto from './image/libto.jpg'; 
import liblib from './image/liblib.jpg'; 

function HomeTo() {
  return (
    <div className="home-container">
      <h1>Welcome to the Library Management System</h1>

      <div className="image-container">
        <div className="box">
          <img src={libto} alt="Library Image 1" />
        </div>
        <div className="box">
          <img src={liblib} alt="Library Image 2" />
        </div>
      </div>
      
    </div>
  );
}

export default HomeTo;
