import React, { useState } from "react";
import todo from "../../api/todo";
export default () => {
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const signup = async (creds) => {
    try {
      setSpinner(true);
      const res = await todo.post("/auth/signup", creds);
      setSpinner(false);
      setRedirect(true);
    } catch (error) {
      setSpinner(false);
      setError("Something went wrong");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };
  return [signup, spinner, error, redirect];
};
