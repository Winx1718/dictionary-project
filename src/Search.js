import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
  let [keyWord, setKeyWord] = useState("");
  function handleResponse(response) {
    console.log(response.data[0]);
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
    </div>
  );
}
