import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetails } from "../redux/features/user/userSlice";
import { fetchUserStories } from "../redux/features/stories/storiesSlice";
import { fetchUserFeeds } from "../redux/features/feeds/feedSlice";
import "./homepage.css";
import SideBar from "./SideBar";
import StoriesCarousel from "./StoriesCarousel";
import Feeds from "./Feeds";

const HomePage = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);
  const { data } = useSelector((state) => state.stories);
  const { feeds } = useSelector((state) => state.feed);

  useEffect(() => {
    dispatch(fetchUserDetails());
    dispatch(fetchUserStories());
    dispatch(fetchUserFeeds());
  }, [dispatch]);

  console.log(feeds);

  return (
    <div className="overflow-clip">
      <SideBar userDetails={userDetails} />
      <div className="flex flex-col w-full">
        <StoriesCarousel data={data} />
        <Feeds feeds={feeds} />
      </div>
    </div>
  );
};
export default HomePage;
