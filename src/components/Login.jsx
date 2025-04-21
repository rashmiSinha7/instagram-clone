import { useState } from "react";
import axios from "axios";
//import { useSelector } from "react-redux";
import "../App.css";
import { useNavigate } from "react-router";
import { constants } from "../constants";

const Login = () => {
  // const counter = useSelector((state) => state.counter);

  // useEffect(() => {
  //   axios.get("/api/users").then((res) => {
  //     console.log(res.data);
  //   });
  //   console.log(counter);
  // }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate(`/account/${res.data.userName}`);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const isDisabled = email && password ? false : true;

  return (
    <div className="flex items-center w-lvw flex-col">
      <div className="border-gray-300 border-[1px] h-[400px] w-[350px] flex justify-center flex-col items-center mt-0">
        <h2 className="instaClone">InstaClone</h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col justify-center items-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="loginInput"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="loginInput"
          />
          <button
            type="submit"
            className={`${!isDisabled ? "loginButton" : "buttonDisabled"}`}
          >
            Log In
          </button>
        </form>
        <div className="text-zinc-500 mt-[20px]">OR</div>
        <div className="text-blue-500 font-bold text-[15px] mt-[20px]">
          Login with Facebook
        </div>
        <div className="text-[14px] font-semibold mt-[15px]">
          Forgot password?
        </div>
      </div>
      <div className="border-gray-300 border-[1px] h-[70px] w-[350px] flex justify-center flex-row items-center mt-[40px] text-[14px] font-semibold">
        <span className="">Don't have an account?</span>
        <span className=" text-blue-500 ml-1"> {constants.sign_up}</span>
      </div>
    </div>
  );
};

export default Login;
