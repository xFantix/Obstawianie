import React from 'react';
import {StyledNavLink,Navigation,HeaderWrapper} from '../styledComponents/headerStyle'
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
