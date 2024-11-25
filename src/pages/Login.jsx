import React from "react";

const Login = () => {
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

      <div className="row">
        <input
          style={{
            width: "60vw",
            margin: "auto",
            height: "5dvh",
            backgroundColor: "transparent",
            borderColor: "#e27860",
            borderStyle: "solid",
            borderRadius: "10px",
            borderWidth: "1px",
          }}
          placeholder="Username"
        ></input>
      </div>

      <div className="row">
        <input
          style={{
            width: "60vw",
            margin: "auto",
            height: "5dvh",
            backgroundColor: "transparent",
            borderColor: "#e27860",
            borderStyle: "solid",
            borderRadius: "10px",
            borderWidth: "1px",
          }}
          placeholder="Password"
          type="password"
        ></input>
      </div>

      <br />

      <div className="row">
        <div className="login-button">Login</div>
      </div>
    </div>
  );
};

export default Login;
