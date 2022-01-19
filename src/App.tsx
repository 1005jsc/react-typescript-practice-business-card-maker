import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';


const App = () =>{

  return <>
  
  <Route path='/' element={<Home/>}/>


  
  </> 


}

export default App;

