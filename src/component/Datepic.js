import { useContext, useState } from "react";
import { FormContext } from "../FormContext";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import "@progress/kendo-theme-material/dist/all.css";

const Datepic = ({ id, lable, placeholder, isRequired, value, type }) => {
  const { handleChangeInput } = useContext(FormContext);

  return (
    <div className="form-group">
      <label className="col-xs-4 control-label" htmlFor="exampleInputAge">
        {lable} :{" "}
      </label>

      <DatePicker
        format="yyyy-MM-dd"
        onChange={(e) => handleChangeInput(id, e)}
      />
    </div>
  );
};
export default Datepic;
