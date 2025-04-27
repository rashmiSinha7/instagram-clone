import "./homepage.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import ReadMore from "./ReadMore";

const FeedFooter = ({
  is_liked,
  likes_count,
  setLikes,
  post_id,
  caption,
  username = "user1",
  is_verified = true,
}) => {
  return (
    <>
      <div className="mt-2 mb-2 flex justify-between w-[450px]">
        <div className="flex gap-4">
          <div
            onClick={() => {
              setLikes((is_liked = !is_liked), post_id);
            }}
          >
            {is_liked ? (
              <FavoriteIcon
                color="inherit"
                style={{ color: "#ff2f40", cursor: "pointer" }}
              />
            ) : (
              <FavoriteBorderOutlinedIcon className="icons" />
            )}
          </div>
          <ChatBubbleOutlineIcon
            className="icons"
            style={{ marginTop: "3px" }}
          />
          <SendOutlinedIcon className="icons" />
        </div>
        <BookmarkBorderOutlinedIcon className="icons" />
      </div>

      <div className="font-bold text-[14px]">{`${likes_count} likes`} </div>
      <div className="flex flex-row flex-wrap w-[450px] mt-2">
        <span className="text-[14px] font-bold">{username}</span>
        <span>
          {is_verified && (
            <VerifiedIcon
              color="primary"
              style={{
                fontSize: "14px",
                marginTop:"-7px",
                marginLeft: "8px",
                marginRight:"8px"
              }}
            />
          )}
        </span>
       <span style={{display:"flex", flexWrap:"wrap"}}><ReadMore text={caption} /></span>
      </div>
    </>
  );
};

export default FeedFooter;
