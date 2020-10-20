import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropDown from "./DropDown";

function App() {
  const [input, setInput] = useState(defaultInputs);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <main className="container mt-5 mb-5">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={input.name}
            className="form-control"
            placeholder="Enter your name"
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Country Code</label>
          <input
            type="text"
            value={input.countryCode}
            className="form-control"
            placeholder="e.g +92, +927, +0"
            onChange={(e) =>
              setInput({ ...input, countryCode: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Country</label>
          <DropDown
            value={input.country}
            className="form-control"
            list={[
              { id: 1, value: "pakistan", title: "Pakistan" },
              { id: 2, value: "india", title: "India" },
              { id: 3, value: "china", title: "China" },
            ]}
            onChange={(e) => setInput({ ...input, country: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary float-right">
          Submit
        </button>
      </form>
    </main>
  );
}

const defaultInputs = {
  name: "",
  countryCode: "",
  country: "",
};

export default App;
