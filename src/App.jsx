import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="background">
      <Login setUser={setUser}></Login>
      <Profile></Profile>
    </div>
  );
}

export default App;
