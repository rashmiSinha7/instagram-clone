import "./homepage.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VerifiedIcon from "@mui/icons-material/Verified";

const Feeds = ({ feeds }) => {
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
        console.log(item);
        return (
          <div className="feed">
            <div className="text-black flex justify-between w-[450px]">
              <div className="text-black flex">
                <img
                  src={item?.user?.profile_picture}
                  className="rounded-4xl h-10 w-10 border-2 border-pink-500 p-0.5"
                />
                <span className="text-black font-bold pt-2 pl-2">
                  {item?.user?.username}
                </span>
                {item?.user?.is_verified && (
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
                <span className="pt-[13px] pl-2 text-xs">
                  {getPostedTime(item?.timestamp)}
                </span>
              </div>
              <div className=" pt-2 pl-2">
                <MoreHorizIcon />
              </div>
            </div>
            <div>
              <img
                src={item?.media[0]?.url}
                className="h-[530px] w-[450px] object-cover mt-3 rounded-[2px]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feeds;
