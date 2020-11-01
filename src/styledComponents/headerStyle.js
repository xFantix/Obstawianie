import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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
export {StyledNavLink,Navigation,HeaderWrapper};