import React, { useReducer, useState } from "react";

const IndexPageContext = React.createContext();
const IndexPageReducer = (state, action) => {
  switch (action.type) {
    case "open_colorpicker_modal":
      return { ...state, isColorPickerModalOpen: true };
    case "close_colorpicker_modal":
      return { ...state, isColorPickerModalOpen: false };
    case "set_color_picker_color":
      return { ...state, colorPicker: action.payload };
    case "add_notes_list":
      return { ...state, notes: action.payload };
    case "set_group_notes_list":
      return { ...state, groupNotes: action.payload };
    default:
      break;
  }
};

export const IndexPageProvider = ({ children }) => {
  const [indexPageState, dispatch] = useReducer(IndexPageReducer, {
    isColorPickerModalOpen: false,
    colorPicker: "#3f51b5",
    notes: [],
    groupNotes: [],
  });

  const openColorPicker = () => {
    dispatch({ type: "open_colorpicker_modal" });
  };

  const setColorPickerColor = (data) => {
    dispatch({ type: "set_color_picker_color", payload: data });
  };
  const addNotesList = (data) => {
    dispatch({ type: "add_notes_list", payload: data });
  };
  const setRequestsList = (data) => {
    dispatch({ type: "set_requests_list", payload: data });
  };
  const setGroupNotes = (data) => {
    dispatch({ type: "set_group_notes_list", payload: data });
  };
  return (
    <IndexPageContext.Provider
      value={{
        indexPageState,
        openColorPicker,
        setColorPickerColor,
        addNotesList,
        setRequestsList,
        setGroupNotes,
      }}
    >
      {children}
    </IndexPageContext.Provider>
  );
};
export default IndexPageContext;
