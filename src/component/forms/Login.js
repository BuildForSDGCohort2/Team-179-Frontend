import React from 'react';
import { Form, Field, useForm } from "@leveluptuts/fresh";

const onSubmit = (data) => {
    console.log('||||||||||||||| SUBMIT |||||||||||||||||')
    console.log('||||||||||||||| SUBMIT |||||||||||||||||')
    console.log('||||||||||||||| SUBMIT |||||||||||||||||')
    console.log('||||||||||||||| SUBMIT |||||||||||||||||')
    console.log(data)
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
                <span>
                    <Field name="remember" type="checkbox">Remember me</Field>
                    <section>Forgot Password?</section>
                </span>
            </Form>
        </div>
    );
};

export default Login;