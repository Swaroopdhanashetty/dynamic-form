const Input = ({ id, lable, placeholder, isRequired, type }) => {
  return (
    <div className="form-group">
      <label className="col-xs-4 control-label" htmlFor="exampleInputAge">
        {lable} :{" "}
      </label>
      <div className="col-xs-8">
        <input
          className="date form-control"
          data-date-format="yyyy/mm/dd"
          id={id}
          type={type}
          placeholder={placeholder}
          isRequired={isRequired}
        />
      </div>
    </div>
  );
};
export default Input;
