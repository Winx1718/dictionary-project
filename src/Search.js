import React, { useState } from "react";
import "./Search.css";
import Results from "./Results";
import axios from "axios";

export default function Search() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function locate(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleChange(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="search">
      <form onSubmit={locate}>
        <input type="search" autoFocus={true} onChange={handleChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
