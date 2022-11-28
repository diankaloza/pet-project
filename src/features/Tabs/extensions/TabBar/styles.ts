import styled, { css } from 'styled-components'

export const TabsStyle = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  letter-spacing: 2px;
`
export const Tab = styled.div<{ isActive: boolean }>`
  border-bottom: 1px solid #616161;
  border-right: 1px solid #616161;
  box-shadow: 0px 1px 1px 0px #424242;
  width: 100%;
  text-align: start;
  padding: 5px 12px;
  transition: background-color 0.3s linear, color 0.3s linear;

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: #3c0e2d;
          color: white;
        `
      : css`
          background-color: transparent;
          color: black;
        `}

  cursor: pointer;

  :active {
    background-color: #3c0e2d;
    color: white;
  }
`
