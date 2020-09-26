import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/HomePage/Home';
import About from './pages/About';
import Produce from './pages/Produce';
import User from './pages/User';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { getCurrentUser } from './services/authService';

function App() {
  const [currentUser, setCurrentUser] = useState(getCurrentUser());

  console.log(currentUser); // TODO:: pass to others
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Produce" exact component={Produce} />
          <Route path="/User" exact component={User} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
