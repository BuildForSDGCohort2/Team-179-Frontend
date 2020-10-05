import React, { useState } from 'react';
import Register from "../components/forms/Register";
import Login from "../components/forms/Login";
import Proile from "../components/forms/ProfileUpdate";


// separated user options from form because it contains complex login page logic
// unrelated to the main purpose of the page
function UserOptions({type, loginView, registerView }) {

    return (
        <div className="user-options">
            <span className="another-option"> Or </span>
            <span style={{display: type === 'register' ? 'none' : 'block'}}>
                Don't have an account ?
                <a href="#"

                   onClick={registerView}
                >Sign Up Here</a>
            </span>
            <span style={{display: type === 'login' ? 'none' : 'block'}}>
                Already have an account
                <a href='#'

                   onClick={loginView}
                >Login</a>
            </span>
            <hr/>
        </div>
    )
}
const User = () => {
    const [type, setView] = useState('register')

    const loginView = () => {
        setView('login')
    }

    const registerView = () => {
        setView('register')
    }

    const Forms = () => {
        const formView = type === 'register' ? <Register/> : <Login/>

        return formView
    }
    return (
        <section className="user-page">
            <div className="user-forms">

                <Forms/>
                <UserOptions
                    type={type}
                    loginView={loginView}
                    registerView={registerView}
                />


            </div>
        </section>
    );
};

export default User;