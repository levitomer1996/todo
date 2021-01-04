import React, { useContext, useState } from "react";
import IndexPageContex from "../Context/IndexPageContex";
import todo from "../api/todo";

export default () => {
  const [spinner, setSpinner] = useState(false);
  const sendRequesToUser = async (usersList, group_id) => {
    let userIdList = [];
    usersList.map((item) => userIdList.push(item._id));
    try {
      setSpinner(true);
      await todo.post(
        "/joinrequest/sendjoinrequest",
        { userIdList, group_id },
        {
          headers: {
            //IsTokenExist = token.
            Authorization: `Bearer ${localStorage.getItem("ut")}`,
          },
        }
      );
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
    }
  };
  return [sendRequesToUser, spinner];
};
