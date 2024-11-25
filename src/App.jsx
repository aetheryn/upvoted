import React, { useState, useEffect } from "react";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="background">
      <Login setUser={setUser}></Login>
    </div>
  );
}

export default App;
