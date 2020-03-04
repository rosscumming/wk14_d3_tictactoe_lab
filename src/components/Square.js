import React from "react";
import "./Square.css";

function Square(props) {
  function handleSquareClick() {
    props.onSquareSelected(props.square.id);
  }
  return <div className="square" onClick={handleSquareClick}></div>;
}

export default Square;
