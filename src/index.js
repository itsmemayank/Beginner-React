import React from "react";
import ReactDOM from "react-dom";

const creator = "Mayank@Nagora";
var d = new Date();

ReactDOM.render(
  <div>
    <p>Created By {creator}</p>
    <p>Copyright {d.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
