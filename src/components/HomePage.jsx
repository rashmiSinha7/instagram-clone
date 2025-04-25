import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetails } from "../redux/features/user/userSlice";
import { fetchUserStories } from "../redux/features/stories/storiesSlice";
import "./homepage.css";
import SideBar from "./SideBar";
import StoriesCarousel from "./StoriesCarousel";

const HomePage = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);
  const { data } = useSelector((state) => state.stories);
  
  useEffect(() => {
    dispatch(fetchUserDetails());
    dispatch(fetchUserStories());
  }, [dispatch]);

  return (
    <div className="overflow-clip">
      <SideBar userDetails={userDetails} />
      <div>
        <StoriesCarousel data={data}/>
      </div>
    </div>
  );
};
export default HomePage;
