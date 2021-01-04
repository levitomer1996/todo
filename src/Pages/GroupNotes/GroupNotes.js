import React, { useContext, useEffect, useState } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Note from "./Comps/Note";
import ListSubheader from "@material-ui/core/ListSubheader";
import AccountIcon from "./Comps/AccountIcon";
import IndexPageContex from "../../Context/IndexPageContex";
import CreateGroupModal from "./Comps/CreateGroupModal";
import useGetUserRequests from "../../Hooks/useGetUserRequests";
import AuthContext from "../../Context/AuthContext";
import RequestsIcon from "./Comps/RequestsIcon";
import { Button, CircularProgress, Typography } from "@material-ui/core";
import RequestsListModal from "./Comps/RequestsListModal";
import useGetUserGroups from "../../Hooks/useGetUserGroups";
import usePostNewGroupNote from "../../Hooks/usePostNewGroupNote";
import useGetGroupNotes from "../../Hooks/useGetGroupNotes";
import GroupOptionsMenu from "./Comps/GroupOptionsMenu";
import ChooseGroupMenu from "./Comps/ChooseGroupMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "-webkit-inline-box",
  },
  subHeader: {
    backgroundColor: "#80808047",
    color: "black",
    display: "-webkit-inline-box",
    width: "100%",
    alignItems: "center",
  },
  notesContainer: { height: "60vh", overflowX: "auto" },
  input: {
    marginLeft: 5,
    marginBottom: 10,
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "0px solid",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    borderColor: theme.palette.primary.main,
  },
  addNoteContainer: {
    display: "grid",
    gridTemplateColumns: "80% 20%",
  },
}));

export default function GroupNotes() {
  const classes = useStyles();
  const { indexPageState } = useContext(IndexPageContex);
  const { authState } = useContext(AuthContext);
  const [getUserRequests] = useGetUserRequests();
  const [getUserGroups, currentGroup] = useGetUserGroups();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [newGroupNote] = usePostNewGroupNote();
  const [getGroupNotes, NotesBoardSpinner] = useGetGroupNotes();

  //Checks if user is admin in a specific group - u means user, g means group

  useEffect(async () => {
    getUserRequests();
    getUserGroups();
  }, []);

  return (
    <List className={classes.root}>
      <ListSubheader className={classes.subHeader}>
        <GroupOptionsMenu currentGroup={currentGroup} />
        {authState.groups.length > 0 ? (
          <ChooseGroupMenu groups={authState.groups} />
        ) : (
          <Typography>{"My group"}</Typography>
        )}

        <RequestsListModal requestsList={authState.requests} />
        <AccountIcon />
      </ListSubheader>
      <div className={classes.notesContainer}>
        {NotesBoardSpinner ? <CircularProgress /> : null}
        {indexPageState.groupNotes.length > 0
          ? indexPageState.groupNotes.map((note) => {
              return (
                <Note
                  title={note.title}
                  time_Posted={note.time_posted}
                  content={note.content}
                />
              );
            })
          : null}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          newGroupNote(authState.groups[0]._id, content, title);
        }}
      >
        <div style={{ display: "grid", flexDirection: "column" }}>
          <input
            className={classes.input}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className={classes.input}
            placeholder="content"
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginLeft: 5 }}
          >
            Add note
          </Button>
        </div>
      </form>
    </List>
  );
}
