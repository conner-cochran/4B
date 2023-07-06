import React from "react";

// Creates search button effect found in Main.js
export default function SearchList({ data, onChildClick }) {
  return <button onClick={onChildClick}>{data}</button>;
}
