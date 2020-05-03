import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {}

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insert a valid email address')
      .required('Email required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <>
      <img src={logo} alt="gobarber-logo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Your password" />

        <button type="submit">Access</button>

        <Link to="/register">Create a free account</Link>
      </Form>
    </>
  );
}
