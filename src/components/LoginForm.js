// LoginForm.js
import React from "react";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

const LoginForm = () => {
    ;const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            // submit login data to the server
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                type="text"
                placeholder="User Name"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
            />
            <input
                type="text"
                placeholder="Password"
                name="passwrod"
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            <div className="button-container">
                <button type="submit">Login</button>
                <Link to="/registration">Sign Up</Link>
            </div>
        </form>
    );
};

export default LoginForm