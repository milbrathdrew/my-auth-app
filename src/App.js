// App.js

/*Consuming the AuthContext: Consuming the Authentication Context is straightforward. 
Wrap your entire application with the AuthProvider and use the useAuth hook in any component that needs access to authentication data.
*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/registration" element={<RegistrationForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
