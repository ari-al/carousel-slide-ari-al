import React from 'react';
import styled from 'styled-components';
import Main from './Main';

const Layout = () => {
  return (
      <Wrap>
          <Header></Header>
          <Footer></Footer>
          <Nav></Nav>
          <Main></Main>
      </Wrap>
  );
}

const Wrap = styled.div`
    width: 100%;
    height: 100%;
`;

const Header = styled.header`
`;

const Footer = styled.footer`
`;

const Nav = styled.nav`
`;

export default Layout;
