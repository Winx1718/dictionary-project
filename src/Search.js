import React, { useState } from "react";
import "./Search.css";
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos";

export default function Search(props) {
  let [keyWord, setKeyWord] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, SetPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    SetPhotos(response.data.photos);
  }
  function locate() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001e440be1bc2a1427283eb5dc5255fb71f";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
          <div className="hint">
            Suggested words: camping, hiking, nature...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
