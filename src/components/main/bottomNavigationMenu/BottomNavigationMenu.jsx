import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from '@mui/icons-material/Home';import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./bottomNavitation.css";

export default function BottomNavigationMenu() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bottomNavigation">
      <BottomNavigation
        className="navigationItems"
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          className="bottomNavigationItem"
          label="خانه"
          value="خانه"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          className="bottomNavigationItem"
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          className="bottomNavigationItem"
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          className="bottomNavigationItem"
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
