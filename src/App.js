import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import './App.css';
import Home from "./components/pages/Home";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import About from "./components/pages/About";
import Produce from "./components/pages/Produce";
import User from "./components/pages/User";



class App extends Component {
  render() {
    return (
        <div>
          <Router>
           <Navbar />
           <Switch>
           <Route path='/' exact component={Home}/>
           <Route path='/About' exact component={About}/>
           <Route path='/Produce' exact component={Produce}/>
           <Route path='/User' exact component={User}/>
           </Switch>
          </Router>
        </div>
    );
  }
}
export default App;
