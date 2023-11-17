import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Home/Home';
// import SinglePage from './SinglePage/SinglePage';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
    <App />
    // <BrowserRouter>
    //     <Routes>
    //         {/* <Route path='/' element={<Home/>}/>
    //         <Route path='SinglePage' element={<SinglePage/>}/>
    //     </Routes>
    // </BrowserRouter> */}
);


