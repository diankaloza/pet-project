import styled from 'styled-components'

export const Table = styled.table`
  border-spacing: 0px;
  color: #424242;
  border-bottom: 0.5px solid #dba2a2;
`

export const TabHead = styled.thead`
  background: #ee9ca7; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ffdde1, #ee9ca7); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffdde1,
    #ee9ca7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
export const Th = styled.th`
  padding: 15px 30px;
  letter-spacing: 2px;
`
export const Tboby = styled.tbody`
  background: #ffdde1;
  text-align: center;
`
export const Td = styled.td`
  padding: 20px;
  border-bottom: 0.5px solid #dba2a2;
  border-top: 0.5px solid #dba2a2;
`
