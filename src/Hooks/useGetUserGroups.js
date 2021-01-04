import React, { useContext, useState } from "react";
import todo from "../api/todo";
import AuthContext from "../Context/AuthContext";

export default () => {
  const { setGroupsList, authState } = useContext(AuthContext);
  const [currentGroup, setCorrentGroup] = useState([]);
  const getUserGroups = async () => {
    try {
      const res = await todo.get("group/usergroups", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ut")}`,
        },
      });
      if (res.data.length > 0) {
        setCorrentGroup(res.data[0]);
      }
      setGroupsList(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return [getUserGroups, currentGroup];
};
