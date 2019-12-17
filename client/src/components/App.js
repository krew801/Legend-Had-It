import React from 'react';
import './App.css';
import Nav from './Nav';
import Post from './Post';
import Search from './Search';
import FrontPage from './FrontPage';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/post" component={Post}/>
      <Route path="/search" component={Search}/>
      <Route path="/FrontPage" component={FrontPage}/>
      <Route path="/login" component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
