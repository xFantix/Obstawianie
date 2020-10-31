import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    width:100%;
    display:flex;
  `
const Navigation = styled.nav`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
  background-color:#1c1b1a;
  @media(max-width:700px){
      flex-direction:column;
  }
  `
const StyledNavLink = styled(NavLink)`
    color:black;
    text-decoration:none;
    font-family: 'Roboto', sans-serif;
    font-weight:500;
    font-size:23px;
    padding:20px 0px;
    color:#0fb85e;
    @media(max-width:700px){
        padding:10px 0px;
    }
`

const Header = () => {
    return (
        <HeaderWrapper className={'header'}>
            <Navigation className={'header__navigation'}>

                <StyledNavLink activeStyle={{ color: '#deb028', }} className={'header__navigation__navLink'} exact to='/'>
                    Football
                    </StyledNavLink>
                <StyledNavLink activeStyle={{ color: '#deb028', }} className={'header__navigation__navLink'} to='/Counter-Strike'>
                    Counter Strike
                    </StyledNavLink>
                <StyledNavLink activeStyle={{ color: '#deb028', }} className={'header__navigation__navLink'} to='/League-of-Legends'>
                    League of Legends
                    </StyledNavLink>
                <StyledNavLink activeStyle={{ color: '#deb028', }} className={'header__navigation__navLink'} to='/Cash-In'>
                    Cash in
                    </StyledNavLink>

            </Navigation>
        </HeaderWrapper>
    );
}

export default Header;
