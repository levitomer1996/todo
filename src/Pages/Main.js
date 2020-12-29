import React, { useContext, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthContext, { AuthProvider } from "../Context/AuthContext";
import Signin from "./SigninPage/SignInPage";
import useSignin from "./SigninPage/useSignin";
import SignupPage from "./SignupPage/SignupPage";
import Grid from "@material-ui/core/Grid";
import MyNotes from "./MainMenu/MyNotes";
import IndexPage from "./IndexPage/IndexPage";
import { IndexPageProvider } from "../Context/IndexPageContex";
export default function Main() {
  const { authState } = useContext(AuthContext);
  const { spinner, isSignedInResolver } = useSignin();
  useEffect(() => {
    console.log(authState);
    isSignedInResolver();
  }, []);

  if (!authState.isLogged) {
    console.log("NotLogged");
    return (
      <Router>
        <Route exact path="/">
          <Signin />
        </Route>
        <Route exact path="/register">
          <SignupPage />
        </Route>
      </Router>
    );
  } else if (authState.isLogged) {
    return (
      <IndexPageProvider>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item>
            <MyNotes />
          </Grid>
          <Grid item>
            <Router>
              <Route exact path="/">
                <IndexPage />
              </Route>
            </Router>
          </Grid>
        </Grid>
      </IndexPageProvider>
    );
  }
}
