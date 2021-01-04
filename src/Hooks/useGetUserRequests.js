import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import todo from "../api/todo";

export default () => {
  const { setRequestsList, authState } = useContext(AuthContext);
  const getUserRequests = async () => {
    try {
      const res = await todo.get("joinrequest/userrequests", {
        headers: {
          //IsTokenExist = token.
          Authorization: `Bearer ${localStorage.getItem("ut")}`,
        },
      });

      setRequestsList(res.data);
    } catch (error) {}
  };

  return [getUserRequests];
};
