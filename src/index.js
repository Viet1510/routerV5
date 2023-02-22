import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter  } from 'react-router-dom';
import Routes from './Functional/Home';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css'

// react 16.2 

ReactDOM.render(
    <BrowserRouter>
        <Routes></Routes>
    </BrowserRouter>,
    document.getElementById('root')
)

// react 18 X
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//      <BrowserRouter>
//         <Routes></Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

