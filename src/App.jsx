import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Login = React.lazy(() => import("./pages/Login"));
const Rating = React.lazy(() => import("./pages/Rating"));

function App() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="background">
      <Suspense>
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
      </Suspense>
    </div>
  );
}

export default App;
