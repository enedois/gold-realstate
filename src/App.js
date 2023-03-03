import React from 'react'
import './App.css';
import Navigation from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import Houses from './components/Houses';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Neighborhoods from './components/Neighborhoods';
import Agents from './components/Agents';
import Home from './components/Home';

function App() {

  
  

  return (
    <>
    <Navigation/>      
    
    <Router>
    <Routes>
      <Route exact path='/properties' element= { <Houses/>}/>
      <Route exact path='/' element= { <Home/>}/>
      <Route exact path='/neighborhoods' element= { <Neighborhoods/>}/> 
      <Route exact path='/agents' element= { <Agents/>}/>     
      
     </Routes>
    </Router>
    </>
  );
}

export default App;
