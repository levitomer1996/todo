import React, { useContext, useState } from "react";
import todo from "../../api/todo";
import AuthContext from "../../Context/AuthContext";
export default () => {
  const { signinContex, signoutContex, authState } = useContext(AuthContext);
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(null);

  const isSignedInResolver = async () => {
    if (localStorage.getItem("ut") === null) {
      return;
    } else {
      try {
        const res = await todo.get("/auth/getuser", {
          headers: {
            //IsTokenExist = token.
            Authorization: `Bearer ${localStorage.getItem("ut")}`,
          },
        });

        signinContex(res.data);
      } catch (error) {
        signoutContex();
        localStorage.removeItem("ut");
      }
    }
  };

  const signin = async (creds) => {
    try {
      setSpinner(true);
      const res = await todo.post("/auth/signin", creds);
      localStorage.setItem("ut", res.data.accessToken);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    isSignedInResolver();
  };
  return { signin, isSignedInResolver, spinner };
};
