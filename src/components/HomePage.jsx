import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetails } from "../redux/features/user/userSlice";
import { fetchUserStories } from "../redux/features/stories/storiesSlice";
import "./homepage.css";
import SideBar from "./SideBar";

const HomePage = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);
  const { data } = useSelector((state) => state.stories);
  useEffect(() => {
    dispatch(fetchUserDetails());
    dispatch(fetchUserStories());
  }, [dispatch]);

  console.log(data);

  return (
    <div>
      <SideBar userDetails={userDetails} />
    </div>
  );
};
export default HomePage;
