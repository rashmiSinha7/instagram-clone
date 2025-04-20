import { useEffect } from "react";
import axios from "axios";

const Login = () => {
  useEffect(() => {
    axios.get("/api/users").then((res) => {
      console.log(res.data);
    });
  }, []);
  
  return <div>Login</div>;
};

export default Login;
