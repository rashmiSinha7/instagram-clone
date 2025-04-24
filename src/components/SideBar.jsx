import { useMemo } from "react";
import "./homepage.css";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ProfilePhoto from "./assets/ProfilePhoto";

const SideBar = ({userDetails}) => {

  const navTabs = useMemo(() => {
    return [
      { label: "Home", icon: <HomeFilledIcon />, id: "1" },
      { label: "Search", icon: <SearchIcon />, id: "2" },
      { label: "Explore", icon: <ExploreOutlinedIcon />, id: "3" },
      { label: "Reels", icon: <MovieOutlinedIcon />, id: "4" },
      { label: "Messages", icon: <MessageOutlinedIcon />, id: "5" },
      { label: "Notifications", icon: <FavoriteBorderOutlinedIcon />, id: "6" },
      { label: "Create", icon: <AddBoxOutlinedIcon />, id: "7" },
      {
        label: "Profile",
        icon: <ProfilePhoto url={userDetails?.profile_picture} />,
        id: "8",
      },
    ];
  }, [userDetails]);

  return (
    <>
      <div className="sideBar">
        <h2 className="instaClone">InstaClone</h2>
        {navTabs.map((item) => {
          return (
            <div className="nav-tabs" key={item.id}>
              {item.icon}
              {item.label}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default SideBar;
