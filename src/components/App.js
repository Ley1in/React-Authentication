import React from 'react';
import Signup from './Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import PrivateRoutes from './PrivateRoutes';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';

const App = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh ' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route element={<Dashboard />} path="/" exact />
                <Route element={<UpdateProfile />} path="/update-profile"/>
              </Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;
