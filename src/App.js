import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <form className="input-group mb-3" id="search-engin">
        <input
          type="text"
          className="form-control"
          placeholder="City"
          aria-label="City"
          aria-describedby="button-addon2"
          id="city-input"
          autoComplete="off"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon3"
        >
          Current
        </button>
      </form>
    </div>
  );
}
