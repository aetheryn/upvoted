import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Rating from "./pages/Rating";

function App() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="background">
      {!user ? (
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route
            path="login"
            element={<Login setUser={setUser} setUserId={setUserId}></Login>}
          />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="login"
            element={<Login setUser={setUser} setUserId={setUserId}></Login>}
          />
          <Route
            path="rating"
            element={
              <Rating user={user} userId={userId} setUser={setUser}></Rating>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
