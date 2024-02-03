import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div>
            {user ? (
                //render dashboard for authenticated users
                <h1>Welcome, {user.username}!</h1>
            ) : (
                //Redirect or display message for unauthenticated user
                <h1>Please log in to access this page.</h1>
            )}
        </div>
    );
};

export default Dashboard;