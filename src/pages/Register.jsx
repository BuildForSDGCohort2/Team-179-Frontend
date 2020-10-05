import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { registerService } from '../services/formSubmissions';

const Register = () => {
  const { register, handleSubmit, errors } = useForm();

  const handleRegister = (data) => {
    const response = registerService(data);
    console.log(response);
  };
  // console.log(data) // data: {  defaults: { name: "" }, secondForm: { name: "" } }
  return (
    <div className="user-forms">
      <form onSubmit={handleSubmit(handleRegister)}>

        <div>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" placeholder="First name" ref={register({ required: true })} />
          {errors.firstName && errors.firstName.type === 'required' && (
              <p className="alert alert-danger">First name is required!</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" placeholder="last name" ref={register({ required: true })} />
          {errors.lastName && errors.lastName.type === 'required' && (
              <p className="alert alert-danger">Last name is required!</p>
          )}
        </div>

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
          <label htmlFor="id_number">ID Number</label>
          <input
            name="id_number"
            placeholder="2100****"
            type="number"
            ref={register({ required: true })}
          />
          {errors.id_number && errors.id_number.type === 'required' && (
              <p className="alert alert-danger">Id number is required!</p>
          )}
        </div>

        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <input
            name="phone_number"
            placeholder="07**210***"
            type="number"
            ref={register({ required: true })}
          />
          {errors.phone_number && errors.phone_number.type === 'required' && (
              <p className="alert alert-danger">Phone number is required!</p>
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
        <div>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            name="confirm_password"
            placeholder="Confirm password"
            type="password"
            ref={register({ required: true })}
          />
          {errors.confirm_password && errors.confirm_password.type === 'required' && (
              <p className="alert alert-danger">Confirm password is required!</p>
          )}
        </div>

        <input type="submit" value="Register" />

        <section>
          <hr />
          <h1> OR </h1>
          Already have an account
          <Link
              to="/login"
              className="page-link"
          >
            Login
            {' '}
          </Link>
        </section>
      </form>

    </div>
  );
};

export default Register;
