import React from "react";

const Login = () => {
  return (
    <div className="login">
      <img
        src="logo.png"
        style={{
          width: "80vw",
          height: "30vh",
          objectFit: "cover",
          marginBottom: "0px",
        }}
      ></img>

      <div className="row">
        <input
          style={{
            width: "50vw",
            margin: "auto",
            height: "5vh",
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
            width: "50vw",
            margin: "auto",
            height: "5vh",
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
