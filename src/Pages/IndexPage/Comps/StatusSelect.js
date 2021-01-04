import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useUpdateNote from "../../../Hooks/useUpdateNote";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function StatusSelect({ status, id }) {
  const classes = useStyles();
  const [stateStatus, setStatus] = useState(status);
  const [updateNoteStatus] = useUpdateNote();
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  useEffect(() => {}, []);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{stateStatus}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={stateStatus}
        onChange={handleChange}
      >
        <MenuItem
          value={"OPEN"}
          onClick={() => {
            updateNoteStatus(id, "OPEN");
          }}
        >
          Open
        </MenuItem>
        <MenuItem
          value={"IN_PROGRESS"}
          onClick={() => {
            updateNoteStatus(id, "IN_PROGRESS");
          }}
        >
          In progress
        </MenuItem>
        <MenuItem
          value={"DONE"}
          onClick={() => {
            updateNoteStatus(id, "DONE");
          }}
        >
          Done
        </MenuItem>
      </Select>
    </FormControl>
  );
}
