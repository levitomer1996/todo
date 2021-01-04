import React, { useContext } from "react";
import todo from "../api/todo";
import AuthContext from "../Context/AuthContext";
import IndexPageContext from "../Context/IndexPageContex";

export default () => {
  const { authState } = useContext(AuthContext);
  const { setRequestsList } = useContext(IndexPageContext);
  const approveJoinRequest = async (request) => {
    try {
      const res = await todo.post(
        "joinrequest/approverequest",
        { request },
        {
          headers: {
            //IsTokenExist = token.
            Authorization: `Bearer ${localStorage.getItem("ut")}`,
          },
        }
      );
      const newArray = authState.requests.filter(
        (item) => item._id !== request._id
      );
      if (newArray.length === 0) {
        setRequestsList([]);
      } else {
        setRequestsList(newArray);
      }
    } catch {}
  };

  return [approveJoinRequest];
};
