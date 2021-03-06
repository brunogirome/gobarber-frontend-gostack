import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  // Using react hooks Dispatch integration
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

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

        <button type="submit">
          {loading ? 'SignIn, please wait...' : 'Access'}{' '}
        </button>

        <Link to="/register">Create a free account</Link>
      </Form>
    </>
  );
}
