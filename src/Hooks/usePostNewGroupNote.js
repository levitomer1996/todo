import React from "react";
import todo from "../api/todo";

export default () => {
  const newGroupNote = async (group_id, content, title) => {
    try {
      const res = await todo.post(
        "/group/newnote",
        {
          group_id,
          content,
          title,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("ut")}`,
          },
        }
      );
    } catch (error) {}
  };
  return [newGroupNote];
};
