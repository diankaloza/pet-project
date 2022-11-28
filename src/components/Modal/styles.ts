import styled from 'styled-components'

import { ModalProps } from './UserCreate/styles'

export const BaseModalStyle = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BaseModalTitle = styled.div<ModalProps>`
  font-size: 22px;
  padding: 10px;
  font-weight: 800;
  display: ${({ display }) => display};
  justify-content: space-between;
`
export const BaseModalWindow = styled.div`
  width: 500px;
  background-color: #ffffff;
  border: 2px solid black;
  border-radius: 10px;
  z-index: 2;
`
export const BaseModalInputArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  color: black;
`
export const BaseModalInput = styled.input`
  padding: 10px 5px;
  margin-bottom: 10px;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 1px 2px 0px black;
  }
`
export const BaseModalSelect = styled.select`
  overflow-y: scroll;
  padding: 10px 5px;
  margin-bottom: 15px;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 1px 2px 0px black;
  }
`

export const BaseExit = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  text-align: center;
  box-shadow: 2px 2px 2px 1px #a4acb0;
  :hover {
    box-shadow: 1px 1px 0px 1px #a4acb0;
  }
  :active {
    box-shadow: 1px 1px 0px 1px #a4acb0;
    background-color: #e8edef;
  }
`
export const BaseErrorStyle = styled.span`
  font-size: 12px;
  color: red;
  text-align: start;
  margin-bottom: 10px;
`
export const BaseEmptyError = styled.div`
  margin-bottom: 27px;
`
interface ButtonProps {
  width: number
  margin?: number
}

export const BaseButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid rgb(60 14 45);
  background-color: black;
  color: white;
  cursor: pointer;
  transition: all 0.2s linear;

  :hover {
    background-color: rgb(60 14 45);
    color: white;
    box-shadow: 3px 3px 3px 2px #496161;
  }
  :active {
    background-color: rgb(60 14 45);
    color: white;
  }
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
`

export const BaseAllButton = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-around;
`
