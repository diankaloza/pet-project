import styled from 'styled-components'

export const TableBase = styled.table`
  border-spacing: 0px;
  width: 100%;
  border: 0.5px solid black;
  background-color: rgb(60 14 45);
`

export const TableWrapperBase = styled.div`
  overflow-x: auto;
  max-width: 100%;
`

export const TabHeadBase = styled.thead`
  font-weight: 800;
  text-decoration: underline;
  color: white;
`

export const ThBase = styled.th`
  padding: 30px 30px;
  letter-spacing: 2px;
`

export const TbobyBase = styled.tbody`
  text-align: center;
  color: white;
  letter-spacing: 2px;
`

export const TdBase = styled.td`
  padding: 20px;

  border-top: 0.5px solid black;
`

export const ButtonAddBase = styled.button`
  font-weight: 600;
  padding: 5px;
  margin: 5px 0px;
  border: 1px solid white;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s linear, color 0.3s linear;

  :hover {
    background-color: rgb(104 33 81);
  }
  :active {
    background-color: #fff1f0;
    color: black;
  }
`
