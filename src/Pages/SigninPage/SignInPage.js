import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import BootstrapInput from "../../Components/Boostrapinput/BootstrapInput";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";
import useSignin from "./useSignin";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin, isSignedInResolver, spinner } = useSignin();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        signin({ email, password });
      }}
      style={{ marginTop: "10%" }}
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <BootstrapInput
            type={"email"}
            label={"E-mail"}
            onChangeFunction={setEmail}
          />
        </Grid>
        <Grid item>
          {" "}
          <BootstrapInput
            type={"password"}
            label="Password"
            onChangeFunction={setPassword}
          />
        </Grid>
        <Grid item>
          <Button
            type="sumbit"
            variant="contained"
            style={{ backgroundColor: "#ffb2b2" }}
          >
            Login
          </Button>
        </Grid>
        <Grid item>
          <a href={"/register"}>Still don't have an account? Register now</a>
        </Grid>
      </Grid>
    </form>
  );
};
export default Signin;
