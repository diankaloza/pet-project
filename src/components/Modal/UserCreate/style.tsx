import styled from 'styled-components'

export interface ModalProps {
  display: string
  width?: number
}

export const ModalStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: #a4acb0;
  filter: opacity(0.9);
  position: absolute;
  top: 0px;
`

export const ModalWindow = styled.div`
  width: 500px;
  max-height: 330px;
  background-color: #ffffff;
  position: relative;
  top: 30%;
  left: 30%;
  border: 2px solid black;
  border-radius: 10px;
`
export const ModalTitle = styled.div<ModalProps>`
  font-size: 22px;

  padding: 10px;
  font-weight: 800;
  display: ${({ display }) => display};
  justify-content: space-between;
`

export const ModalInputArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
`
export const ModalInput = styled.input`
  margin-bottom: 20px;
  padding: 10px 5px;
  border: 1.5px solid black;
  cursor: pointer;
  &:hover {
    box-shadow: 10px 3px 3px 2px black;
  }
`
export const Exit = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  text-align: center;
  box-shadow: 3px 3px 3px 2px #a4acb0;
  :hover {
    box-shadow: 1px 1px 0px 1px #a4acb0;
  }
  :active {
    box-shadow: 1px 1px 0px 1px #a4acb0;
    background-color: #e8edef;
  }
`
