import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {
    alert('hello');
  }

  return (
    <>
      <img src={logo} alt="gobarber-logo" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Complete name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Your password" />

        <button type="submit">Create account</button>

        <Link to="/">Already registered</Link>
      </Form>
    </>
  );
}
