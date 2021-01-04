import React, { useContext, useState } from "react";
import todo from "../api/todo";
import IndexPageContext from "../Context/IndexPageContex";

export default () => {
  const { setGroupNotes } = useContext(IndexPageContext);
  const [spinner, setSpinner] = useState(false);
  const getGroupNotes = async (group_id) => {
    try {
      setSpinner(true);
      const res = await todo.post(
        "/group/groupnotes",
        { group_id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("ut")}`,
          },
        }
      );

      setGroupNotes(res.data);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
    }
  };
  return [getGroupNotes, spinner];
};
