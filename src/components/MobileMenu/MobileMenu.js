import React from 'react';

import styled from 'styled-components';

/* eslint-disable no-unused-vars */
import {
  DialogContent,
  DialogOverlay,
} from '@reach/dialog';

import Icon from '../Icon';
import { NavLink } from '../Nav/Nav';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <ContentWrapper aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id={"close"} />
          <VisuallyHidden>Close Modal</VisuallyHidden>
        </CloseButton>
        <Spacer />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </ContentWrapper>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background-color: hsl(220deg 5% 40% / 0.9);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ContentWrapper = styled(DialogContent)`
  position: relative;
  background-color: white;
  padding: 32px;
  height: 100%;
  min-width: 300px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 32px;
  flex: 1;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  color: hsl(220deg 5% 40%);

  &:hover {
    text-decoration: revert;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

export default MobileMenu;
