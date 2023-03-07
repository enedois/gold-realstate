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
       
    
    <Router>
    <Routes>
      <Route exact path='/properties' element= {[<Navigation/> , <Houses/>]}/>
      <Route exact path='/' element= {[<Navigation/> , <Home/>]}/>
      <Route exact path='/neighborhoods' element= {[<Navigation/> ,  <Neighborhoods/>]}/> 
      <Route exact path='/agents' element= {[<Navigation/> ,  <Agents/>]}/>     
      
     </Routes>
    </Router>
    </>
  );
}

export default App;
