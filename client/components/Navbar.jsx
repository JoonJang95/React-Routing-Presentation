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
          changeURL('meow');
        }}
      >
        meowPage
      </div>
      <div
        onClick={() => {
          changeURL('pep');
        }}
      >
        pepPage
      </div>
    </div>
  );
};

export default Navbar;
