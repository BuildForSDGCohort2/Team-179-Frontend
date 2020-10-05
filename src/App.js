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
// import AdminNavBar from "./components/admin/AdminNavBar";


function App() {

    return (
        <div>
          <Router>
          <GlobalStyle />
           <Navbar />
           {/* <AdminNavBar/> */}
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

{/* =======
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
>>>>>>> 99d80b34fc68b93a1b71ffc59865978ee654ddfd */}
        </div>
    );
}
export default App;
