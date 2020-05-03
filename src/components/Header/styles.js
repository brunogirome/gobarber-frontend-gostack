import styled from 'styled-components';

export const Container = styled.div`
  background: #3b4252;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #4c566a;
      height: 32px;
    }

    a {
      font-weight: bold;
      color: #eceff4;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #4c566a;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #d8dee9;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #81a1c1;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
`;
