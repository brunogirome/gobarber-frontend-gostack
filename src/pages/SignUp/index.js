import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {}

  const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Insert a valid email address')
      .required('Email required'),
    password: Yup.string()
      .min(6, 'The password need at least 6 characters')
      .required('Password is required'),
  });

  return (
    <>
      <img src={logo} alt="gobarber-logo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Complete name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Your password" />

        <button type="submit">Create account</button>

        <Link to="/">Already registered</Link>
      </Form>
    </>
  );
}
