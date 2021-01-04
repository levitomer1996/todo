import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import useApproveJoinToGroup from "../../../Hooks/useApproveJoinToGroup";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: "1px solid #9e9e9e6b",
    borderBottom: "1px solid #9e9e9e6b",
    paddingTop: 10,
    paddingBottom: 10,
  },
}));
export default function RequestsListItem({ request }) {
  const [approveJoinRequest] = useApproveJoinToGroup();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography>{request.group_name}</Typography>
        <Typography>
          <strong>Admin:</strong>
          {request.group_admin}
        </Typography>
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            approveJoinRequest(request);
          }}
        >
          Confirm
        </Button>
      </div>
      <div>
        <Button variant="contained" color="secondary">
          Decline
        </Button>
      </div>
    </div>
  );
}
