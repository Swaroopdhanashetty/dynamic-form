import React, { useContext } from "react";
import { FormContext } from "../FormContext";

const Select = ({ id, label, items }) => {
  const { handleChangeInput } = useContext(FormContext);
  console.log(label);
  return (
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">{label} :</label>
      <select
        className="form-control"
        onChange={(e) => {
          handleChangeInput(id, e);
        }}
      >
        {items.length > 0 &&
          items.map((option, value) => (
            <option key={value}>{option.text}</option>
          ))}
        <option>Default select</option>
      </select>
    </div>
  );
};
export default Select;
