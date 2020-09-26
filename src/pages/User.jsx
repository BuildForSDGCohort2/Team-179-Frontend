import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const User = () => {
  const [data, setView] = useState([
    { user: false },
  ]);

  // TODO:: no user obj, not connected to api, just redirect to login for now
  return (
    <section className="user-page">
      <div className="user-forms">

        <h1> Redirect to login.....</h1>
        <Redirect to="/login" />

      </div>
    </section>
  );
};

export default User;
