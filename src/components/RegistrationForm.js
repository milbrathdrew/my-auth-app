// RegistrationForm.js

import React from "react";
import { useFormik } from 'formik';
import { Link } from "react-router-dom";

const RegistrationForm = () => {
    ;const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        onSubmit: values => {
            // submit registration data to the server
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
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
            />
                 <input
                type="text"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
            />

            <div className="button-container">
                <button type="submit">Register</button>
                <Link to="/login">Back to Login</Link>
            </div>
        </form>
    );
};

export default RegistrationForm;