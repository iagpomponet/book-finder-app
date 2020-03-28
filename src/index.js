import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const wrapper = document.querySelector("#root");

console.log("opalas", wrapper)
ReactDOM.render(<App />, wrapper);