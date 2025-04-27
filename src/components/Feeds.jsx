import "./homepage.css";
import { useSelector, useDispatch } from "react-redux";
import FeedHeader from "./FeedHeader";
import FeedFooter from "./FeedFooter";
import { updateLikes } from "../redux/features/feeds/feedSlice";

const Feeds = () => {
  const { feeds } = useSelector((state) => state.feed);

  const dispatch = useDispatch();

  const setLikes = (isLiked, post_id) => {
    let updatedState = feeds.map((item) => {
      if (item.post_id == post_id) {
        return {
          ...item,
          is_liked: isLiked,
          likes_count: isLiked ? item.likes_count + 1 : item.likes_count - 1,
        };
      } else return item;
    });
    dispatch(updateLikes(updatedState));
  };
  const getPostedTime = (time) => {
    const t2 = new Date();
    const t1 = new Date(time);

    const diffInMs = Math.abs(t2 - t1); // Difference in milliseconds
    const hours = Math.floor(diffInMs / (1000 * 60 * 60));
    return `${hours} h`;
  };

  return (
    <div className="absolute top-[140px] left-[320px] flex flex-col justify-center items-center w-[600px]">
      {feeds?.map((item) => {
        return (
          <div className="feed">
            <FeedHeader
              time={getPostedTime(item?.timestamp)}
              is_verified={item?.user?.is_verified}
              username={item?.user?.username}
              profile_picture={item?.user?.profile_picture}
            />
            <div>
              <img
                src={item?.media[0]?.url}
                className="h-[530px] w-[450px] object-cover mt-3 rounded-[3px] border-1 border-gray-200"
              />
            </div>
            <FeedFooter
              likes_count={item?.likes_count}
              is_liked={item?.is_liked}
              setLikes={setLikes}
              post_id={item?.post_id}
              caption={item?.caption}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Feeds;
