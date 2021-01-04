import { Modal } from "@material-ui/core";
import React from "react";
import { SketchPicker } from "react-color";
import IndexPageContex from "../../../Context/IndexPageContex";
class ColorPicker extends React.Component {
  state = {
    background: "#3f51b5f7",
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    this.context.setColorPickerColor(color.hex);
  };

  render() {
    return (
      <SketchPicker
        color={this.state.background}
        onChangeComplete={this.handleChangeComplete}
      />
    );
  }
}
ColorPicker.contextType = IndexPageContex;
export default ColorPicker;
