import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from "react-bootstrap";
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

export { Button }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
