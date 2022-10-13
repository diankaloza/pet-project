import styled from 'styled-components'

export const TabsStyle = styled.div`
  margin-top: 20px;
  padding: 0px 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #bdbdbd;
  margin-bottom: 2px;
`
export const Tab = styled.div`
  border-bottom: 1px solid #616161;
  border-right: 1px solid #616161;
  box-shadow: 1px 1px 1px 1px #424242;
  padding: 5px 166px;
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
export const Content = styled.div`
  min-height: calc(100vh - 70px - 65px);
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

  display: flex;
  align-items: flex-start;
  margin-top: 10px;
`
