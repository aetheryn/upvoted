import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Rating from "./pages/Rating";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="background">
      {!user ? (
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="login" element={<Login setUser={setUser}></Login>} />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="login" element={<Login setUser={setUser}></Login>} />
          <Route path="rating" element={<Rating user={user}></Rating>} />
        </Routes>
      )}
    </div>
  );
}

export default App;
