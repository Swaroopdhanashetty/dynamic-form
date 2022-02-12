import React from "react";
import Input from "./Input";
import Select from "./Select";
import Datepic from "./Datepic";
const Element = ({ field: { label, type, key, isRequired, items, value } }) => {
  if (type === "number") {
    return (
      <Input
        id={key}
        type={type}
        lable={label}
        value={value}
        placeholder={label}
        isRequired={isRequired}
      />
    );
  } else if (type === "date") {
    return (
      <Datepic
        id={key}
        type={type}
        lable={label}
        value={value}
        placeholder={label}
        isRequired={isRequired}
      />
    );
  } else if (type === "dropdown") {
    return (
      <Select
        id={key}
        label={label}
        type={type}
        placeholder={label}
        items={items}
      />
    );
  } else {
    return <h1> Json data not found</h1>;
  }
};
export default Element;
