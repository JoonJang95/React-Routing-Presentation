import React from 'react';

const Navbar = ({ changeURL }) => {
  return (
    <div className="navbar">
      <div
        onClick={() => {
          changeURL('login');
        }}
      >
        Login
      </div>
      <div
        onClick={() => {
          changeURL('');
        }}
      >
        Home
      </div>
      <div
        onClick={() => {
          changeURL('about');
        }}
      >
        AboutPage
      </div>
      <div
        onClick={() => {
          changeURL('contact');
        }}
      >
        ContactPage
      </div>
    </div>
  );
};

export default Navbar;
