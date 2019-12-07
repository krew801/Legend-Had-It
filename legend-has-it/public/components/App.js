import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Search from './Search';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/about" component ={About}/>
      <Route path="/search" component ={Search}/>
    </div>
    </Router>
  );
}

export default App;
