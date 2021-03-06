import React, { useState } from 'react';
import LoginForm from '../components/LoginForms';
import RegisterForm from '../components/RegisterForm';

const Welcome = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const optInText = isLoginView
    ? ['Create an account', 'Register']
    : ['I already have an account', 'Login'];

  return (
    <div className='centered-view'>
      <div className='centered-container'>
        {isLoginView ? <LoginForm /> : <RegisterForm />}
        <small className='form-text text-muted mt-2'>
          {optInText[0]}
          <span
            onClick={() => setIsLoginView(!isLoginView)}
            className='btn-link ml-2'
          >
            {optInText[1]}
          </span>
        </small>
      </div>
    </div>
  );
};

export default Welcome;
