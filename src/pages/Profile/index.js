import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  async function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      {/* Rocketseat unform has the 'initialData' property to set variables
      on input fields based on element 'name' property */}
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Complete name" />
        <Input name="email" type="email" placeholder="Email name" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Your password" />
        <Input
          name="password"
          type="password"
          placeholder="Your new password"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm your new password"
        />

        <button type="submit">Update profile</button>
      </Form>

      <button type="button">Exit GoBarber</button>
    </Container>
  );
}

export default Profile;
