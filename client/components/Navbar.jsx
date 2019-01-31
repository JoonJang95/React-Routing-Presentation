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

// part 2 (old code)

{
  /* <div className="navbar">
      <a href="/login">
        <div>Login</div>
      </a>
      <a href="/">
        <div>HomePage</div>
      </a>
      <a href="/meow">
        <div>meowPage</div>
      </a>
      <a href="/pep">
        <div>pepPage</div>
      </a>
    </div> */
}
