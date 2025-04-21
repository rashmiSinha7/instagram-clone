import { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  useEffect(() => {
    axios.get("/user/home").then((res) => {
      console.log(res.data);
    });
  }, []);
  return <div>Hi</div>;
};
export default HomePage;
