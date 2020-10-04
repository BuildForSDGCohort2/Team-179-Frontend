import React, { useState, useEffect } from 'react';
import {
  Route, BrowserRouter as Router, Switch, Redirect,
} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/HomePage/Home';
import About from './pages/About';
import Produce from './pages/Produce';
import User from './pages/User';
import './App.css';
import './scss/main.scss';
import Login from './pages/Login';
import Register from './pages/Register';
import { getCurrentUser } from './services/authService';
import Logout from './pages/Logout';

function App() {
  const [currentUser, setCurrentUser] = useState([]);

  // todo current user should be a jwt string (roles)
  const queryUser = () => {
    const user = getCurrentUser();
    setCurrentUser(user);
  };

  useEffect( () => {
    queryUser();
  }, []);

  console.log(currentUser); // TODO:: pass to others
  console.log(currentUser); // TODO:: pass to others
  console.log(currentUser); // TODO:: pass to others
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <Router>
        <GlobalStyle />
        <Navbar
          currentUser={currentUser}
        />
        <Switch>
          <Route
            path="/home"
            render={(props) => <Home {...props} currentUser={currentUser} />}
          />
          <Route path="/About" exact component={About} />
          <Route path="/Produce" exact component={Produce} />
          <Route
            path="/user"
            render={(props) => <User {...props} currentUser={currentUser} />}
          />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/logout" exact component={Logout} />
          <Redirect from="/" exact to="home" />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
