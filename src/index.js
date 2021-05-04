import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Square from './components/square'


ReactDOM.render(
  <React.StrictMode>
    <div className="selectDificult">
      <h3>Select the difficult</h3>
    </div>
    <Square></Square>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

