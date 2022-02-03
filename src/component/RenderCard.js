import React from "react";
import { Label, Form, Input, Dropdown } from "reactstrap";

const keysToComponentMap = {
  label: Label,
  form: Form,
  input: Input,
  dropdown: Dropdown,
};

function renderer(config) {
  console.log(config.type);

  return React.createElement(
    "form",
    { label: "Here is the label prop" },
    React.createElement(
      "div",
      {},
      React.createElement(keysToComponentMap[config.type])
    )
  );
  //   React.createElement("h1"),
  //   React.createElement(keysToComponentMap[config.type])
}
export default renderer;
