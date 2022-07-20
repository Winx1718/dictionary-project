import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [keyWord, setKeyWord] = useState("");
  function locate(event) {
    event.preventDefault();
    alert(`searching ${keyWord}`);
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
