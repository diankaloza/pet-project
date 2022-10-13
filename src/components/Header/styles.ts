import styled, { StyledComponent } from 'styled-components'

export const NavBar = styled.nav`
  padding: 18px;
  border: 3px ridge #434343;
  font-size: 24px;
  display: flex;
  text-shadow: 2px 2px 2px black, 0 0 1em white, 0 0 0.2em black;
  justify-content: space-between;
  color: #e0e0e0;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #434343, #000000); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
