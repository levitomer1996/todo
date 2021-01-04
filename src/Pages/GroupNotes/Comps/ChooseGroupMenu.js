import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Typography } from "@material-ui/core";
import useGetGroupNotes from "../../../Hooks/useGetGroupNotes";

export default function ChooseGroupMenu({ groups }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentGroup, setCurrentGroup] = useState("");
  const [getGroupNotes] = useGetGroupNotes();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (g) => {
    setCurrentGroup(g);
    setAnchorEl(null);
  };

  useEffect(() => {
    setCurrentGroup(groups[0]);
  }, [groups]);
  useEffect(() => {
    getGroupNotes(currentGroup._id);
  }, [currentGroup]);
  return (
    <div>
      <Typography fontWeight="bold" onClick={handleClick}>
        {currentGroup.group_name}
      </Typography>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {groups.map((item) => {
          return (
            <MenuItem onClick={() => handleClose(item)}>
              {item.group_name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
