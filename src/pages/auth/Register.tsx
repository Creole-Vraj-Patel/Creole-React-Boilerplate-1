import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <div>Register User in this Page.</div>
      <Link to={'/auth/login'}>Click here to go to the Login Page.</Link>
    </>
  );
};

export default Register;
