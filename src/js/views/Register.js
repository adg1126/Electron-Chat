import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <div className='centered-view'>
      <div className='centered-container'>
        <RegisterForm />
        <small className='form-text text-muted mt-2'>
          Not registered yet?
          <span onClick={() => {}} className='btn-link ml-2'>
            Register
          </span>
        </small>
      </div>
    </div>
  );
};

export default Register;
