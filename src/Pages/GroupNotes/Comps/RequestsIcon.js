import React from "react";
import { IconButton } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Badge from "@material-ui/core/Badge";
export default function RequestsIcon({ requestsList }) {
  return (
    <div>
      <IconButton>
        <Badge badgeContent={requestsList.length} color="primary">
          <MailOutlineIcon fontSize="large" />
        </Badge>
      </IconButton>
    </div>
  );
}
