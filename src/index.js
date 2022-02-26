import Didact from "../modules/didact";

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <h1>Hello Adnan</h1>
    <a>bar</a>
    <p>This is a paragraph</p>
  </div>
);

const container = document.getElementById("root");

Didact.render(element, container);
