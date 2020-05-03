import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GobarberLogo" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Leandro Costa</strong>
              <Link to="profile">My profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="User Avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
