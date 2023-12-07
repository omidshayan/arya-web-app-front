import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "./UserPanel.css";
import UserContext from './../../../Context/UserContext';
import {useContext, useState} from 'react'

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const {userData, logout} = useContext(UserContext);
  

  return (
    <Box sx={{ flexGrow: 2 }}>
      <Tooltip title="پروفایل">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="img/img-3.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <div className="userNameAppbar">
          {userData.name}
        </div>
        <MenuItem className="backMenuAppbar">
          <Link to={"dashboard"} className="f-w colorMenuItem">
            پروفایل
          </Link>
        </MenuItem>

        <MenuItem>
          <Link to={"dashboard"} className="f-w colorMenuItem">
            تغییر رمزعبور
          </Link>
        </MenuItem>

        <MenuItem onClick={logout}>
          <span className="f-w colorMenuItem">
            خروج
          </span>
        </MenuItem>
      </Menu>
    </Box>
  );
}
export default ResponsiveAppBar;
