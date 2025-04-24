import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetails } from "../redux/features/user/userSlice";
import "./homepage.css";
import SideBar from "./SideBar";

const HomePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchUserDetails());
  }, [dispatch]);

  return (
    <div>
      <SideBar user={user} />
    </div>
  );
};
export default HomePage;
