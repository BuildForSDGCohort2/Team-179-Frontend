import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import './App.css';
<<<<<<< HEAD
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
=======
import {Route, Redirect, Switch, Link} from 'react-router-dom'
import User from "./component/pages/User";
import About from "./component/pages/About";
import Home from "./component/pages/Home";
import './scss/main.scss'
class App extends Component {
  render() {
    return (
        <div className="container-fluid">
            <React.Fragment>
                <nav>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/user">
                        User
                    </Link>

                    <Link to="/about">
                        About
                    </Link>

                </nav>

                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/user" component={User}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </React.Fragment>
>>>>>>> 99d80b34fc68b93a1b71ffc59865978ee654ddfd
        </div>
    );
  }
}
export default App;
