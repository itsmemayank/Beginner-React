import React from "react";
import ReactDom from "react-dom";

const fname = "Mayank";
const lname = "Nagora";

ReactDom.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>My lucky no is {Math.ceil(Math.random() * 100)}</p>
  </div>,
  document.getElementById("root")
);
