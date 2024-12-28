import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

const Shutdown = (props) => {
  return (
    <div className="login">
      <img
        src="logo.png"
        style={{
          width: "90dvw",
          height: "30dvw",
          objectFit: "cover",
          marginBottom: "0px",
        }}
      ></img>

      <div style={{ textAlign: "center" }}>SYSTEM ERROR. SHUTTING DOWN.</div>
    </div>
  );
};

export default Shutdown;
