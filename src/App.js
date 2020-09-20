import React from 'react';
import GlobalStyle from './globalStyles';
import Navbar from "./components/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss'
import './App.css'
import Home from "./pages/HomePage/Home";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import About from "./pages/About";
import Produce from "./pages/Produce";
import User from "./pages/User";
import AdminNavBar from "./components/admin/AdminNavBar";


function App() {

    return (
        <div>
          <Router>
          <GlobalStyle />
           <Navbar />
           <AdminNavBar/>
           <Switch>
           <Route path='/' exact component={Home}/>
           <Route path='/About' exact component={About}/>
           <Route path='/Produce' exact component={Produce}/>
           <Route path='/User' exact component={User}/>
           {/* <Route path='/reports' exact component={Reports}/>
           <Route path='/config' exact component={Config}/>
           <Route path='/logs' exact component={Logs}/> */}
           </Switch>
          </Router>
        </div>
    );
}
export default App;
