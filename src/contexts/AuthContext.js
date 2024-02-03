/*
Creating an Authentication Context: To manage authentication states, start by creating an Authentication Context. 
This context can include information such as the user's ID, authentication status, and any relevant user data. 
Here's a simplified example:
*/

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        //Logic to authenticate and set user data
        setUser(userData);
    };

    const logout = () => {
        //logic to log out user
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );

};