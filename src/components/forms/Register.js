import React from 'react';
import { Form, Field, useForm } from "@leveluptuts/fresh";


const onSubmit = (data) => {
    console.log(data)
}
const Register = () => {

    const { data } = useForm() //TODO:: validate before submit
    //console.log(data) // data: {  defaults: { name: "" }, secondForm: { name: "" } }
    return (
        <div>
            <Form
                formId="secondForm"
                onSubmit={onSubmit}
                submitText="Register"
                cancelButton={false}
            >
                <Field name="names" placeholder="names">Names</Field>
                <Field name="email" type="email" placeholder="Email">Email</Field>
                <Field name="id_number" type="number" placeholder="ID Number">ID Number</Field>
                <Field name="phone_number" type="number" placeholder="Phone Number">Phone Number</Field>
                <Field name="password" type="password" placeholder="password">Password</Field>
                <button type='submit' className='btn'>Register</button>
            </Form>
        </div>
    );
};

export default Register;