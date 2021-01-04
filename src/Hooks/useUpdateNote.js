import React, { useContext } from "react";
import IndexPageContex from "../Context/IndexPageContex";
import todo from "../api/todo";

export default () => {
  const { indexPageState } = useContext(IndexPageContex);

  const updateNoteStatus = async (id, status) => {
    try {
      const res = await todo.patch(
        "/note",
        { id, status },
        {
          headers: {
            //IsTokenExist = token.
            Authorization: `Bearer ${localStorage.getItem("ut")}`,
          },
        }
      );
    } catch (error) {}
  };
  return [updateNoteStatus];
};
