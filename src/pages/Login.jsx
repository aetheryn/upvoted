import React from "react";

const Login = () => {
  return (
    <div className="login">
      <img
        src="logo.png"
        style={{
          width: "300px",
          height: "100px",
          objectFit: "cover",
          marginBottom: "0px",
        }}
      ></img>

      <br />

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
        <button
          style={{
            width: "80%",
            margin: "auto",
            height: "40px",
            backgroundColor: "#f1ddde",
            borderColor: "#f1ddde",
            borderStyle: "solid",
            borderRadius: "10px",
            borderWidth: "1px",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
