import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AddNoteBoard from "./Comps/AddNoteBoard";
import IndexPageContext from "../../Context/IndexPageContex";
import useGetUserNotes from "../../Hooks/useGetUserNotes";
import moment from "moment";
import Note from "./Comps/Note";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const useStyles = makeStyles((theme) => ({
  root: { padding: 20, width: "100%" },
}));

const IndexPage = () => {
  const classes = useStyles();
  const { indexPageState } = useContext(IndexPageContext);
  const [getUserNotes] = useGetUserNotes();

  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getUserNotes();
  }, []);
  useEffect(() => {
    setNotes(indexPageState.notes);
  }, [indexPageState.notes]);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <AddNoteBoard />
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column-reverse"
              justify="center"
              alignItems="center"
            >
              {notes.map((item) => {
                return (
                  <Note
                    title={item.title}
                    content={item.content}
                    color={item.color}
                    note_status={item.note_status}
                    time_Posted={item.time_Posted}
                    key={item._id}
                    id={item._id}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IndexPage;
