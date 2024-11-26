import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_KEY}`,
        },
      };

      const response = await fetch(
        import.meta.env.VITE_AIRTABLE_SERVER,
        options
      );

      if (response.ok) {
        const data = await response.json();
        for (const record of data.records) {
          console.log(record);
          if (
            username === record.fields.username &&
            password === record.fields.password
          ) {
            props.setUser(record.fields.username);
            navigate("/rating");
          }
        }
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error.message);
      }
    }

    setErrorLogin(true);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
        {errorLogin && (
          <>
            <br />
            <div style={{ textAlign: "center", marginBottom: "2dvh" }}>
              Wrong username or password.
            </div>
            <br />
          </>
        )}
        <div className="login-button" onClick={(event) => handleLogin(event)}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
