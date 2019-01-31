import React from 'react';

const LoginPage = ({ changeURL }) => {
  const submitLogin = () => {
    changeURL('');
  };

  return (
    <div>
      <form className="loginForm">
        <h1 className="loginHeader">React Routing</h1>
        <input type="text" className="login-input" placeholder="username" />
        <input type="password" className="login-input" placeholder="password" />
        <button
          onClick={e => {
            e.preventDefault();
            submitLogin();
          }}
          className="login-button"
        >
          Login
        </button>
        <p className="login-forgot">Forgot Password?</p>
      </form>
    </div>
  );
};

export default LoginPage;
