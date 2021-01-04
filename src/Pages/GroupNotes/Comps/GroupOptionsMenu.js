import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddParticipantModal from "./AddParticipantModal";
import { IconButton } from "@material-ui/core";
export default function GroupOptionsMenu({ isAdmin, currentGroup }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <AddParticipantModal
          handleCloseMenu={handleClose}
          currentGroup={currentGroup}
          isAdmin={isAdmin}
        />

        <MenuItem onClick={handleClose}>Leave group</MenuItem>
      </Menu>
    </div>
  );
}
