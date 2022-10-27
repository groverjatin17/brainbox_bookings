import React from "react";
import { useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/arrow-left.svg";

export default function Explore() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="content">
        <h1>This is the explore section</h1>
        <p>Lets Explore</p>
        <button onClick={() => navigate("/")}>
          <img src={arrowLeft} alt="arrowLeft" />
          <span>Back to Home</span>
        </button>
      </div>
    </React.Fragment>
  );
}
