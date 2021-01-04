import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Popper from "@material-ui/core/Popper";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#80808047",
    fontWeight: "bold",
  },
}));

export default function AddMemberButton({
  f_name,
  l_name,
  _id,
  email,
  onClickHandler,
}) {
  const classes = useStyles();

  return (
    <Button onClick={onClickHandler}>
      {f_name} {l_name}
    </Button>
  );
}
