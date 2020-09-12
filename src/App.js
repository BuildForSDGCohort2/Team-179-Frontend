import React, {Component} from 'react';
import './App.css';
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
        </div>
    );
  }
}

export default App;
