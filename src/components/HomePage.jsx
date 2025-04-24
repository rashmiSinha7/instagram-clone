import { useEffect } from "react";
import axios from "axios";
import "./homepage.css";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const HomePage = () => {
  useEffect(() => {
    axios.get("/user/details").then((res) => {
      console.log(res.data)
    });
  }, []);

  const navTabs = [
    { label: "Home", icon: <HomeFilledIcon />, id: "1" },
    { label: "Search", icon: <SearchIcon />, id: "2" },
    { label: "Explore", icon: <ExploreOutlinedIcon />, id: "3" },
    { label: "Reels", icon: <MovieOutlinedIcon />, id: "4" },
    { label: "Messages", icon: <MessageOutlinedIcon />, id: "5" },
    { label: "Notifications", icon: <FavoriteBorderOutlinedIcon />, id: "6" },
    { label: "Create", icon: <AddBoxOutlinedIcon />, id: "7" },
    { label: "Profile", icon: <AddBoxOutlinedIcon />, id: "8" },
  ];
  return (
    <div>
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
    </div>
  );
};
export default HomePage;
