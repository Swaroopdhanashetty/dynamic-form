import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Element from "./component/Element";
import drug1 from "./drug1.json";
import drug2 from "./drug2.json";
import { FormContext } from "./FormContext";

function App() {
  const [element, setElement] = useState(null);
  const [date, setDate] = useState([]);
  const [state, setState] = useState(false);

  const { fields } = element ?? {};

  const handleSubmit = () => {
    const newEle = { ...element };
    setDate([]);

    newEle.fields.map((field) => {
      const { key } = field;
      console.log();
      if (field["value"] === "") {
        setDate((prevState) => [...prevState, key]);
        setState(true);
        console.log(true);
      }
    });
    if (state === true) {
      alert("Submited successfull");
    }
  };

  const handleChangeInput = (id, e) => {
    const newElement = { ...element };

    newElement.fields.map((field) => {
      const { key } = field;
      if (id === key) {
        field["value"] = e.target.value;
      }

      setElement(newElement);
      console.log(element);
    });
  };

  return (
    <FormContext.Provider value={{ handleChangeInput }}>
      <div>
        {date.map((d) => (
          <text
            className="text-center d-block"
            key={d}
          >{`${d} not field`}</text>
        ))}

        <form className=" needs-validation form">
          <h2 className="headerTitle">Dynamic Form Creation using JSON</h2>
          {fields ? (
            fields.map((field, key) => (
              <div key={key}>
                <Element field={field} />
              </div>
            ))
          ) : (
            <h5 className="text-white bg-dark d-flex justify-content-center">
              Pleas Click on any One of Drug Button
            </h5>
          )}
          <div className="d-flex justify-content-center">
            <button
              type="button"
              onClick={() => handleSubmit()}
              className="btn btn-success item-center  m-2 "
            >
              Submit
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-around">
          <button
            type="button"
            onClick={() => setElement(drug1)}
            className="btn btn-success "
          >
            Drug1
          </button>
          <button
            type="button"
            onClick={() => setElement(drug2)}
            className="btn btn-success"
          >
            Drug2
          </button>
        </div>
      </div>
    </FormContext.Provider>
  );
}

export default App;
