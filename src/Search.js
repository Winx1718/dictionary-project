import React, { useState } from "react";
import "./Search.css";
import Results from "./Results";
import axios from "axios";

export default function Search(props) {
  let [keyWord, setKeyWord] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function locate() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    locate();
  }
  function handleChange(event) {
    setKeyWord(event.target.value);
  }
  function load() {
    setLoaded(true);
    locate();
  }
  if (loaded) {
    return (
      <div className="search">
        <section>
          <h3>What word would you like to look up?</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleChange}
              defaultValue={props.defaultKeyWord}
            />
          </form>
          <div className="hint">Suggested words: camping, hiking, nature...</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
