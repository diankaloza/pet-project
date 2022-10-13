import styled from 'styled-components'

export const BodyContent = styled.div`
  padding: 30px;
  min-height: calc(100vh - 70px - 65px);
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #434343, #000000); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
export const List = styled.li`
  list-style-type: none;
  font-size: 16px;
`
export const ListTitle = styled.ul`
  margin: 5px 0px;
  font-size: 22px;
  font-weight: 700;
`
export const BodyTitle = styled.h1`
  text-shadow: 1px 1px 2px black, 0 0 1em #ffffff, 0 0 0.2em #ffffff;
`
