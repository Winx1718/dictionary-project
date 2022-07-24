import React from "react";

export default function Synonyms(props) {
  console.log(props);
  if (props.synonyms) {
    return (
      <span>
        <strong>Synonyms: </strong>
        <ul className="Synonyms">
          {props.synonyms.map(function (synonyms, index) {
            return <li key={index}>{synonyms}</li>;
          })}
        </ul>
      </span>
    );
  } else {
    return null;
  }
}
