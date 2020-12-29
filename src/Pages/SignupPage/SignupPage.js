import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import BootstrapInput from "../../Components/Boostrapinput/BootstrapInput";
import { makeStyles } from "@material-ui/core/styles";
import useSignup from "./useSignup";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Alert from "@material-ui/lab/Alert";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles(() => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft: "1rem",
    },
    largeScreenName: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    error: {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      height: "50px",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));
});
export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [f_name, set_f_name] = useState("");
  const [l_name, set_l_name] = useState("");

  const [signup, spinner, error, redirect] = useSignup();

  const classes = useStyles();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ email, password, f_name, l_name });
        signup({ email, password, f_name, l_name });
      }}
    >
      {redirect ? <Redirect to="/" /> : null}
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
        className={classes.root}
      >
        <Grid item>
          <BootstrapInput
            type={"email"}
            label="E-mail"
            onChangeFunction={setEmail}
          />
        </Grid>
        <Grid item>
          <BootstrapInput
            type={"password"}
            label="Password"
            onChangeFunction={setPassword}
          />
        </Grid>

        <Grid item>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item>
              {" "}
              <BootstrapInput
                type={"text"}
                label="First name"
                onChangeFunction={set_f_name}
              />
            </Grid>
            <Grid item>
              <BootstrapInput
                type={"text"}
                label="Last name"
                onChangeFunction={set_l_name}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button type="sumbit" variant="contained" color="primary">
            Register
          </Button>
        </Grid>
        <Grid item>
          <a href="/">Already have a user? Login now</a>
        </Grid>
        <Grid item>{spinner ? <CircularProgress /> : null}</Grid>

        <Grid item>
          {error ? (
            <Alert severity="error">Something wen't wrong.</Alert>
          ) : null}
        </Grid>
      </Grid>
    </form>
  );
}
