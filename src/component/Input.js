import { useContext } from "react";
import { FormContext } from "../FormContext";
const Input = ({ id, lable, placeholder, isRequired, value, type }) => {
  const { handleChangeInput } = useContext(FormContext);
  return (
    <div className="form-group">
      <label className="col-xs-4 control-label" htmlFor="exampleInputAge">
        {lable} :{" "}
      </label>
      <div className="col-xs-8">
        <input
          className="date form-control"
          placeholder={placeholder}
          value={value}
          name={value}
          type={type}
          onChange={(e) => handleChangeInput(id, e)}
          required
        />
      </div>
    </div>
  );
};
export default Input;
