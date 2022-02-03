import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Element from "./component/Element";
import drug1 from "./drug1.json";
import drug2 from "./drug2.json";

function App() {
  const [element, setElement] = useState(null);
  // useEffect(() => {
  //   setElement(drug1);
  // }, []);
  console.log(element);
  const { fields } = element ?? {};
  console.log(fields);

  return (
    <div>
      <form className="loginform p-4">
        <h2 className="headerTitle">Dynamic Form Creation using JSON</h2>
        {fields ? (
          fields.map((field, i) => (
            <div key={i}>
              <Element field={field} />
              <p></p>
            </div>
          ))
        ) : (
          <h5 className="text-white bg-dark d-flex justify-content-center">
            Pleas Click on any One of Drug Button
          </h5>
        )}
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
  );
}

export default App;
