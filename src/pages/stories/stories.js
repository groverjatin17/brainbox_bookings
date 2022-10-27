import React from "react";
import { useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/arrow-left.svg";

export default function Stories() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="content">
        <h1>Stories</h1>
        <p>
          Founded in 1996 in Amsterdam, Booking.com has grown from a small Dutch
          start-up to one of the world’s leading digital travel companies. Part
          of Booking Holdings Inc. (NASDAQ: BKNG), Booking.com’s mission is to
          make it easier for everyone to experience the world.
        </p>
        <button onClick={() => navigate("/home")}>
          <img src={arrowLeft} alt="arrowLeft" />
          <span>Back to Home</span>
        </button>
      </div>
    </React.Fragment>
  );
}
