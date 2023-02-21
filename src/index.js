import React from 'react';
import ReactDOM from 'react-dom'
import Home from './Functional/Home';
import './index.css';

// react 17 

ReactDOM.render(
    <Home></Home>,
    document.getElementById('root')
)

// react 18 X
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Home></Home>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

