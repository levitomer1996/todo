import React, { useContext } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { IconButton } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AuthContext from "../../../Context/AuthContext";
import CreateGroupModal from "./CreateGroupModal";

export default function AccountIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { signoutContex } = useContext(AuthContext);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <AccountCircleIcon fontSize="large" />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          {" "}
          <CreateGroupModal />
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
            signoutContex();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
