import React from "react";
import Input from "./Input";
import Select from "./Select";
const Element = ({ field: { label, type, key, isRequired, items } }) => {
  console.log(type, label, key, isRequired);
  if (type === "number" || type === "date") {
    return (
      <Input
        id={key}
        type={type}
        lable={label}
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
