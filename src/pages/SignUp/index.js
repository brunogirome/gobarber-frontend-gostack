import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="gobarber-logo" />
      <form>
        <input type="text" placeholder="Complete name" />
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Your password" />

        <button type="submit">Create account</button>

        <Link to="/">I'm already registered</Link>
      </form>
    </>
  );
}
