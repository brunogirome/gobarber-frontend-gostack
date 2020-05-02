import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="gobarber-logo" />
      <form>
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Your password" />

        <button type="submit">Access</button>

        <Link to="/register">Create a free account</Link>
      </form>
    </>
  );
}
