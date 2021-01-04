import React, { useReducer, useState } from "react";

const AuthContext = React.createContext();
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { ...state, isLogged: true, user: action.payload };
    case "signout":
      localStorage.removeItem("ut");
      return { ...state, isLogged: false, user: {} };
    case "set_theme_color":
      return { ...state, themeColor: action.payload };
    case "set_requests_list":
      return { ...state, requests: action.payload };
    case "set_groups_list":
      return { ...state, groups: action.payload };
    default:
      break;
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, {
    isLogged: false,
    user: {},
    themeColor: { mainMenu: "#ff000008", header: "rgba(255, 0, 0, 0.3)" },
    requests: [],
    groups: [],
  });

  const signinContex = (data) => {
    dispatch({ type: "signin", payload: data });
    return;
  };
  const signoutContex = (data) => {
    dispatch({ type: "signout" });
  };
  const setThemeColor = (data) => {
    dispatch({
      type: "set_theme_color",
      payload: data,
    });
  };
  const setRequestsList = (data) => {
    dispatch({ type: "set_requests_list", payload: data });
  };

  const setGroupsList = (data) => {
    dispatch({ type: "set_groups_list", payload: data });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        setRequestsList,
        signinContex,
        signoutContex,
        setThemeColor,
        setGroupsList,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
