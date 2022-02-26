import Didact from "../modules/didact";

/** @jsx Didact.createElement */
const element = (
  <div id="foo" style="background: salmon">
    <h1>Hello there!</h1>
    <p style="text-align:right">- By Adnan</p>
  </div>
);

const container = document.getElementById("root");

Didact.render(element, container);
