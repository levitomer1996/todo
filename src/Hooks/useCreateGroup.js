import React, { useState } from "react";
import todo from "../api/todo";

export default () => {
  const [spinner, setSpinner] = useState(false);
  const [usersToShow, setUsersToshow] = useState([]);
  const [membersToHad, setMembersToHad] = useState([]);
  const findMembers = async (f_name, l_name) => {
    try {
      setSpinner(true);
      const res = await todo.post("/auth/finduserbyname", { f_name, l_name });
      setUsersToshow(res.data);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
    }
  };
  const addMemberToHadList = (member) => {
    setMembersToHad([...membersToHad, member]);
  };

  const createNewGroup = async (name, list) => {
    const idList = [];
    list.map((item) => {
      idList.push(item);
    });
    try {
      const res = await todo.post(
        "/group/new",
        { name, idList },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("ut")}`,
          },
        }
      );
    } catch (error) {}
  };

  return [
    spinner,
    usersToShow,
    findMembers,
    membersToHad,
    addMemberToHadList,
    createNewGroup,
  ];
};
