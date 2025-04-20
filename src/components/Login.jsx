import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Login = () => {
  const counter = useSelector((state) => state.counter);

  useEffect(() => {
    axios.get("/api/users").then((res) => {
      console.log(res.data);
    });
    console.log(counter);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <>
      {" "}
      <form onSubmit={handleLogin}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;
