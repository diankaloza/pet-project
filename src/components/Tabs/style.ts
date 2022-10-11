import styled from 'styled-components'

export const TabsStyle = styled.div`
  padding: 0px 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`
export const Tab = styled.div`
  border: 1px solid transparent;
  cursor: pointer;
  :hover {
    background-color: #f5f5f5;
    border-bottom: 1px solid #bdbdbd;
  }
  :active {
    background-color: #fafafa;
  }
`
