import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const Login = React.lazy(() => import("./components/Login"));
  const HomePage = React.lazy(() => import("./components/HomePage"));
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            index
            element={
              <Suspense fallback={<h1>Loading....</h1>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/account/:userName"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <HomePage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
