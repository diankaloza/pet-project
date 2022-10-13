import styled, { StyledComponent } from 'styled-components'

export const FooterStyle = styled.div`
  padding: 18px;

  text-align: center;
  color: white;
  border: 3px ridge #434343;
  font-size: 16px;
  text-shadow: 1px 1px 2px black, 0 0 1em white, 0 0 0.2em black;
  color: #e0e0e0;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #434343, #000000); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
export const LinkStyle = styled.a`
  text-decoration: none;
  color: black;
  text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em white;
  :hover {
    text-shadow: 1px 1px 2px #ff4081, 0 0 1em #ff4081, 0 0 0.2em #ff4081;
  }
`
