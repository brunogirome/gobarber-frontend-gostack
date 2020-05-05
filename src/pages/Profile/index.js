import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';

import { Container } from './styles';

function Profile() {
  const profile = useSelector((state) => state.user.profile);

  async function handleSubmit(data) {}

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
