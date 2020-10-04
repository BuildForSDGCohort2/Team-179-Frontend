import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../services/authService';

const Logout = () => {
  const [page, setView] = useState('');

  const loggedout = logout();

  if (loggedout) {
    return <Redirect to="/home" />;
  }
};

export default Logout;
