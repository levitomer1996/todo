import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Note from "./Comps/Note";
import ListSubheader from "@material-ui/core/ListSubheader";
import AccountIcon from "./Comps/AccountIcon";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  subHeader: {
    backgroundColor: "#80808047",
    color: "black",
  },
}));

export default function MyNotes() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListSubheader className={classes.subHeader}>
        {"My Notes"} <AccountIcon />
      </ListSubheader>
      <Note />
    </List>
  );
}
