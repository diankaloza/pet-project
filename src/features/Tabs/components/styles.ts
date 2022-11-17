import styled from 'styled-components'

export const TableBase = styled.table`
  border-spacing: 0px;
  color: #424242;
  width: 100%;
  border: 0.5px solid black;
`

export const TableWrapperBase = styled.div`
  overflow-x: auto;
  max-width: 100%;
`

export const TabHeadBase = styled.thead`
  background: #ada996; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #eaeaea, #dbdbdb, #f2f2f2, #ada996);
  background: linear-gradient(to right, #eaeaea, #dbdbdb, #f2f2f2, #ada996);
  color: black;
  font-weight: 800;
  text-decoration: underline;
`

export const ThBase = styled.th`
  padding: 15px 30px;
  letter-spacing: 2px;
`

export const TbobyBase = styled.tbody`
  background: #ada996; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  text-align: center;
  color: black;
`

export const TdBase = styled.td`
  padding: 20px;

  border-top: 0.5px solid black;
`

export const ButtonAddBase = styled.button`
  font-weight: 600;
  color: black;
  padding: 5px;
  margin: 5px 0px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  background-color: #dbdbdb;
  box-shadow: 2px 2px 2px 2px black;
  :hover {
    background-color: white;
    box-shadow: 1px 1px 1px 1px black;
  }
  :active {
    background-color: white;
    box-shadow: 1px 1px 1px 1px black;
    margin-bottom: 5px;
  }
`
