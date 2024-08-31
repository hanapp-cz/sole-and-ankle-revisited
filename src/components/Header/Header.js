import React from 'react';

import styled from 'styled-components/macro';

import {
  COLORS,
  QUERIES,
  WEIGHTS,
} from '../../constants';
import Icon from '../Icon';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';
import { NavLink } from '../Nav/Nav';
import SuperHeader from '../SuperHeader';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>

        <DesktopNav>
          <DesktopNavLink href="/sale">Sale</DesktopNavLink>
          <DesktopNavLink href="/new">New&nbsp;Releases</DesktopNavLink>
          <DesktopNavLink href="/men">Men</DesktopNavLink>
          <DesktopNavLink href="/women">Women</DesktopNavLink>
          <DesktopNavLink href="/kids">Kids</DesktopNavLink>
          <DesktopNavLink href="/collections">Collections</DesktopNavLink>
        </DesktopNav>

        <IconsWrapper>
          <NavButton>
            <Icon id={"shopping-bag"} />
            <VisuallyHidden>Open Cart</VisuallyHidden>
          </NavButton>
          <NavButton>
            <Icon id={"search"} />
            <VisuallyHidden>Search</VisuallyHidden>
          </NavButton>
          <NavButton onClick={() => setShowMobileMenu(true)}>
            <Icon id={"menu"} />
            <VisuallyHidden>Menu</VisuallyHidden>
          </NavButton>
        </IconsWrapper>

        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletAndSmaller} {
    border-top: 4px solid ${COLORS.gray[900]};
    align-items: center;
    padding-left: 16px;
    padding-right: 6px;
  }
`;

const NavButton = styled(UnstyledButton)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconsWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    align-items: center;
    margin-left: auto;

    gap: 12px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 2px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const DesktopNavLink = styled(NavLink)`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export default Header;
