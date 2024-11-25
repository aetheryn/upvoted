import React, { useEffect, useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    props.setUser(username);
  };

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
          onChange={handleUsernameChange}
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
          onChange={handlePasswordChange}
        ></input>
      </div>

      <br />

      <div className="row">
        <div className="login-button" onClick={handleLogin}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
