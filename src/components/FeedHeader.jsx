import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VerifiedIcon from "@mui/icons-material/Verified";

const FeedHeader = ({ profile_picture, username, is_verified, time }) => {
  return (
    <div className="text-black flex justify-between w-[450px]">
      <div className="text-black flex">
        <img
          src={profile_picture}
          className="rounded-4xl h-10 w-10 border-2 border-pink-500 p-0.5"
        />
        <span className="text-black font-bold pt-2 pl-2">{username}</span>
        {is_verified && (
          <VerifiedIcon
            color="primary"
            style={{
              marginTop: "13px",
              fontSize: "15px",
              marginLeft: "8px",
            }}
          />
        )}
        <span className=" pt-2 pl-2">
          <FiberManualRecordIcon
            fontSize="inherit"
            color="disabled"
            style={{ fontSize: "8px" }}
          />
        </span>
        <span className="pt-[13px] pl-2 text-xs">{time}</span>
      </div>
      <div className=" pt-2 pl-2">
        <MoreHorizIcon />
      </div>
    </div>
  );
};
export default FeedHeader;
