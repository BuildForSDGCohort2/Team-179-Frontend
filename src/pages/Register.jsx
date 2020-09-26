import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { registerService } from '../services/formSubmissions';


const Register = () => {
  const { register, handleSubmit } = useForm();


  const handleRegister = (data) => {
    const response = registerService(data)
    console.log(response);
  };
  // console.log(data) // data: {  defaults: { name: "" }, secondForm: { name: "" } }
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)}>

        <div>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" placeholder="First name" ref={register} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" placeholder="last name" ref={register} />
        </div>

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
          <label htmlFor="id_number">ID Number</label>
          <input
            name="id_number"
            placeholder="2100****"
            type="number"
            ref={register}
          />
        </div>

        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <input
            name="phone_number"
            placeholder="07**210***"
            type="number"
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
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            name="confirm_password"
            placeholder="Confirm password"
            type="password"
            ref={register}
          />
        </div>

        <input type="submit" value="Register" />
      </form>
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
    </div>
  );
};

export default Register;
