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

  return (
    <div className="reset-password-form">

      <form onSubmit={handleSubmit(handlePwReset)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="email@example.com"
            type="email"
            ref={register}
          />
        </div>

        <input type="submit" value="Reset password" />
      </form>
    </div>
  );
};

const LoginForm = ({ showResetForm }) => {
  const { register, handleSubmit, errors } = useForm();

  const handleLogin = (data) => {
    const response = loginService(data);

    login(response.data.email)
    // TODO:: all a logout link

    console.log(response.data.email);
    // TODO ::response should return a user object as jwt from api
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="email@example.com"
            type="email"
            ref={register}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            placeholder="password"
            type="password"
            ref={register}
          />
        </div>
        <div>
          <label htmlFor="remember_me">Remember me</label>
          <input
            type="checkbox"
            name="remember_me"
            value
            ref={register}
          />
        </div>

        <input type="submit" value="Login" />
      </form>

      <section className="reset-pw-link" onClick={showResetForm}>Forgot Password?</section>
    </div>
  );
};

const Login = () => {
  const [page, setView] = useState('');

  const showResetForm = () => {
    setView('reset_form');
  };

  const FormView = () => (page === 'reset_form' ? <ResetPassword /> : <LoginForm showResetForm={showResetForm} />);
  return (
    <div>

      <section>
        <FormView />
        <hr />
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
    </div>
  );
};

export default Login;
