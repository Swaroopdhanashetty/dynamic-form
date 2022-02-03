import React from "react";

const Select = ({ id, label, items }) => {
  console.log(label);
  return (
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">{label} :</label>
      <select className="form-control">
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
