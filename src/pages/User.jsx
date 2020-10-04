import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';

const User = ({ currentUser }) => {
  console.log('|||||||||||||| current user ||||||||||||||||||');
  console.log('|||||||||||||| current user ||||||||||||||||||');
  console.log('|||||||||||||| current user ||||||||||||||||||');
  console.log(currentUser);
  console.log(currentUser);
  console.log(currentUser);
  const [data, setView] = useState([
    { user: false },
  ]);

  if (!currentUser) {
    return (
      <>
        <h1> Redirect to login.....</h1>
        <Redirect to="/login" />
      </>
    );
  }

  // TODO:: no user obj, not connected to api, just redirect to login for now
  return (
    <section className="user-page">
      <div className="user-forms">
        <h1>
          {' '}
          User logged in as
          {' : '}
          {currentUser}
          {' : '}

          ..Getting user data from api ..........
          .....
        </h1>
          <hr/>
          <Link
              to="/logout"
              className="page-link"
          >
              Logout (FOr testing to be removed)
              {' '}
          </Link>
      </div>
    </section>
  );
};

export default User;
