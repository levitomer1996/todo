import React, { useContext, useEffect, useState } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IndexPageContext from "../../../Context/IndexPageContex";
import { Button } from "@material-ui/core";

import ColorPickerModal from "./ColorPickerModal";
import usePostNewNote from "../../../Hooks/usePostNewNote";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  input: {
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
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const AddNoteBoard = () => {
  const classes = useStyles();
  const { indexPageState } = useContext(IndexPageContext);
  const [postNewNote] = usePostNewNote();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        postNewNote({ title, content, color: indexPageState.colorPicker });
      }}
    >
      <div className={classes.root}>
        {" "}
        <input
          placeholder="Note title"
          className={classes.input}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write a note here"
          className={classes.input}
          cols="40"
          rows="5"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <div style={{ display: "inline-block" }}>
          <div style={{ float: "left" }}>
            <ColorPickerModal />
          </div>
          <div style={{ float: "right" }}>
            <Button variant="contained" color="primary" type="submit">
              Add Note
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddNoteBoard;
