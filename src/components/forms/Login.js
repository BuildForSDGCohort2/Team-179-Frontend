import React from 'react';
import { Form, Field, useForm } from "@leveluptuts/fresh";

const onSubmit = (data) => {
    // {
    //     method: 'POST',
    //     url: 'https://agri-vesty.herokuapp.com/auth/login',
    //     form : {
    //         'email': 'this.email',
    //         'password': 'this.password'
    //     }
    // }
}

const Login = () => {
    const { data } = useForm() //validate before submit
    return (
        <div>
            <Form
                formId="loginForm"
                onSubmit={onSubmit}
                submitText="Login"
                cancelButton={false}
            >
                <Field name="email" type="email" placeholder="email">Email</Field>
                <Field name="password" type="password" placeholder="password">Password</Field>
                <button type='submit' className='btn'>Login</button>
                <span>
                    <Field name="remember" type="checkbox">Remember me</Field>
                    <section>Forgot Password?</section>
                </span>
            </Form>
        </div>
    );
};

export default Login;