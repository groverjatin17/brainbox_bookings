import React from "react";
import { useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/arrow-left.svg";

export default function Help() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="content">
        <h1>How can we help you</h1>
        <p>
          Please feel free to write us a mail at{" "}
          <a href="mailto:groverjatin17@gmail.com">groverjatin17@gmail.com</a>
        </p>
        <button onClick={() => navigate("/home")}>
          <img src={arrowLeft} alt="arrowLeft" />
          <span>Back to Home</span>
        </button>
      </div>
    </React.Fragment>
  );
}
