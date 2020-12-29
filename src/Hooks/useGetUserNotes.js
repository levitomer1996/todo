import React, { useContext } from "react";
import todo from "../api/todo";
import IndexPageContext from "../Context/IndexPageContex";

export default () => {
  const { indexPageState, addNotesList } = useContext(IndexPageContext);
  const getUserNotes = async () => {
    try {
      const res = await todo.get("/note/getuserposts", {
        headers: {
          //IsTokenExist = token.
          Authorization: `Bearer ${localStorage.getItem("ut")}`,
        },
      });
      addNotesList(res.data);
    } catch (error) {}
  };
  return [getUserNotes];
};
