import React, {Component} from 'react';
import Navbar from "./components/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/pages/Home";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import About from "./components/pages/About";
import Produce from "./components/pages/Produce";
import User from "./components/pages/User";

import './scss/main.scss'
import AdminNavBar from "./components/admin/AdminNavBar";
import Reports from "./components/admin/pages/Reports";
import Config from "./components/admin/pages/Config";
import Logs from "./components/admin/pages/Logs";

class App extends Component {
  render() {
    return (
        <div>
          <Router>
           <Navbar />
           <AdminNavBar/>
           <Switch>
           <Route path='/' exact component={Home}/>
           <Route path='/About' exact component={About}/>
           <Route path='/Produce' exact component={Produce}/>
           <Route path='/User' exact component={User}/>
           <Route path='/reports' exact component={Reports}/>
           <Route path='/config' exact component={Config}/>
           <Route path='/logs' exact component={Logs}/>
           </Switch>
          </Router>
        </div>
    );
  }
}
export default App;
