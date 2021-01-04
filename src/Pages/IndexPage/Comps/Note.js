import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import { IconButton, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import useDeletePost from "../../../Hooks/useDeletePost";
import StatusSelect from "./StatusSelect";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    width: 500,
  },
}));

export default function Note({
  title,
  content,
  color,
  time_Posted,
  id,
  note_status,
}) {
  const classes = useStyles();
  useEffect(() => {}, []);
  const [deletePost] = useDeletePost();
  return (
    <Grid item>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item className={classes.root}>
          <Paper
            elevation={3}
            style={{
              backgroundColor: color,
              overflowWrap: "break-word",
              textOverflow: "ellipsis",
            }}
          >
            <div
              style={{
                padding: "10px",
                display: "block",
              }}
            >
              <Typography style={{ fontWeight: "bold", fontSize: "larger" }}>
                {title}
              </Typography>
              <Typography style={{ fontSize: "smaller" }}>
                {" "}
                {moment(time_Posted, "YYYYMMDD").fromNow()}
              </Typography>
            </div>

            <div style={{ padding: 20 }}>{content}</div>
          </Paper>
        </Grid>
        <Grid item style={{ padding: 20 }}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              {" "}
              <IconButton
                style={{ float: "right" }}
                onClick={() => deletePost({ id })}
              >
                {" "}
                <DeleteIcon fontSize={"large"} />
              </IconButton>
            </Grid>
            <Grid item>
              <StatusSelect status={note_status} id={id} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
