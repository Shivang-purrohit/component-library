import './App.css';
import MainPage from './compo/MainPage';
import React from "react";
import { BrowseRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page2 from './compo/Page2';



function App() {
  return (
   <>
  <Routes>
    <Route path='/' element={<MainPage/>} />
    <Route path='/page2' element={<Page2/>} />

  </Routes>
   </>
  );
}

export default App;
