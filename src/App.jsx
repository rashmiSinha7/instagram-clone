
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" index element={<Login/>} />
          <Route path="/account/:userName" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
