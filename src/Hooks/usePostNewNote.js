import React, { useContext, useState } from "react";
import todo from "../api/todo";
import IndexPageContext from "../Context/IndexPageContex";

export default () => {
  const { indexPageState, addNotesList } = useContext(IndexPageContext);
  const postNewNote = async (newNote) => {
    try {
      const res = await todo.post("/note/newnote", newNote, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ut")}`,
        },
      });
      let newArray = indexPageState.notes;
      newArray.push(res.data);
      addNotesList(newArray);
    } catch (error) {}
  };

  return [postNewNote];
};
