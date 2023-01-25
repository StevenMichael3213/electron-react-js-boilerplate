import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./containers/Home"

const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

ReactDOM.render(
  <Home></Home>,
  rootElement,
);
