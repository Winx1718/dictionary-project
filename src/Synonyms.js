import React from "react";

export default function Synonyms(props) {
  console.log(props);
  if (props.synonyms.length !== 0) {
    return (
      <div>
        <h6>
          <strong>Synonyms:</strong>
        </h6>
        <ul className="Synonyms">
          {props.synonyms.map(function (synonyms, index) {
            return <li key={index}>{synonyms}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
