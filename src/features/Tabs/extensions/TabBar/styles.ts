import styled from 'styled-components'

export const TabsStyle = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #bdbdbd;
  margin-bottom: 2px;
`
export const Tab = styled.div`
  border-bottom: 1px solid #616161;
  border-right: 1px solid #616161;
  box-shadow: 1px 1px 1px 1px #424242;
  width: 100%;
  text-align: center;

  cursor: pointer;
  :hover {
    background-color: #fafafa;
    box-shadow: 2px 2px 2px 1px #bdbdbd;
    color: black;
  }
  :active {
    background-color: #fafafa;
  }
`
