import { useEffect } from "react";
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

  return <div>Login</div>;
};

export default Login;
