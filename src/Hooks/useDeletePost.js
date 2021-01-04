import React, { useContext } from "react";
import todo from "../api/todo";
import IndexPageContext from "../Context/IndexPageContex";
export default () => {
  const { addNotesList, indexPageState } = useContext(IndexPageContext);
  var array_to_delete = indexPageState.notes;

  const deletePost = async (id) => {
    try {
      const res = await todo.post("/note/delete", id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ut")}`,
        },
      });

      const newArray = indexPageState.notes.filter(
        (item) => item._id !== res.data.id
      );
      addNotesList(newArray);
    } catch (error) {}
  };
  return [deletePost];
};
