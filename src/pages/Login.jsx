import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import { loginService, resetPassword } from '../services/formSubmissions';
import { login } from '../services/authService';

const ResetPassword = () => {
  const { register, handleSubmit, errors } = useForm();

  const handlePwReset = (data) => {
    const response = resetPassword(data);

    console.log(response);
  };

  // TODO:: remove repeated
  return (
    <div className="reset-password-form">

      <form onSubmit={handleSubmit(handlePwReset)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="email@example.com"
            type="email"
            ref={register({required: true})}

          />
          {errors.email && errors.email.type === 'required' && (
              <p className="alert alert-danger">Email is required!</p>
          )}
        </div>

        <input type="submit" value="Reset password" />

        <hr />
        <section>
          <h1> OR </h1>
          Don&apos;t have an account ?
          <Link
              to="/register"
              className="page-link"
          >
            Sign Up Here
            {' '}
          </Link>
        </section>
      </form>
    </div>
  );
};

const LoginForm = ({ showResetForm, handleLogin }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="email@example.com"
            type="email"
            ref={register({ required: true })}
          />
          {errors.email && errors.email.type === 'required' && (
          <p className="alert alert-danger">Email is required!</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            placeholder="password"
            type="password"
            ref={register({ required: true })}
          />
          {errors.password && errors.password.type === 'required' && (
              <p className="alert alert-danger">Password is required!</p>
          )}
        </div>
        <div className="remember_me">
          <label id="remember_me" htmlFor="remember_me">Remember me</label>
          <input
            type="checkbox"
            name="remember_me"
            value
            ref={register}
          />
        </div>

        <input type="submit" value="Login" />

        <section className="reset-pw-link" onClick={showResetForm}><a>Forgot Password?</a></section>

        <hr />
        <section>
          <h1> OR </h1>
          Don&apos;t have an account ?
          <Link
              to="/register"
              className="page-link"
          >
            Sign Up Here
            {' '}
          </Link>
        </section>
      </form>

    </div>
  );
};

const Login = () => {
  const [page, setView] = useState('');

  const showResetForm = () => {
    setView('reset_form');
  };

  const handleLogin = (data) => {
    const response = loginService(data);

    login(response.data.email);
    // TODO:: all a logout link

    // console.log(response.data.email);

    // TODO:: force reload

    // TODO ::response should return a user object as jwt from api
    // redirect to user page
    setView('user_page');
  };

  const FormView = () => {
    if (page === 'reset_form') {
      return <ResetPassword />;
    } if (page === 'user_page') {
      return <Redirect to="/user" />;
    }

    return <LoginForm showResetForm={showResetForm} handleLogin={handleLogin} />;
  };// (page === 'reset_form' ? <ResetPassword /> ? page === 'user_page' ? <Redirect to='/home'/> : <LoginForm showResetForm={showResetForm} handleLogin={handleLogin} />);
  return (
    <div className="user-forms">
      <FormView />

    </div>
  );
};

export default Login;
