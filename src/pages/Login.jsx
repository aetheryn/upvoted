import React from "react";

const Login = () => {
  return (
    <div className="login">
      <img
        src="logo.png"
        style={{
          width: "500px",
          height: "200px",
          objectFit: "cover",
          marginBottom: "0px",
        }}
      ></img>

      <div className="row">
        <input
          style={{
            width: "80%",
            margin: "auto",
            height: "40px",
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
            width: "80%",
            margin: "auto",
            height: "40px",
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
