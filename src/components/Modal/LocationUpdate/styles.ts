import styled from 'styled-components'

import {
  BaseAllButton,
  BaseButton,
  BaseEmptyError,
  BaseErrorStyle,
  BaseExit,
  BaseModalInput,
  BaseModalInputArea,
  BaseModalStyle,
  BaseModalTitle,
  BaseModalWindow,
} from '../styles'

export interface ModalProps {
  display: string
  width?: number
}

export const ModalStyle = styled(BaseModalStyle)``

export const ModalWindow = styled(BaseModalWindow)``
export const ModalTitle = styled(BaseModalTitle)``

export const ModalInputArea = styled(BaseModalInputArea)``

export const ModalInput = styled(BaseModalInput)``

export const Exit = styled(BaseExit)``

export const ErrorStyle = styled(BaseErrorStyle)``

export const EmptyError = styled(BaseEmptyError)``

export const Button = styled(BaseButton)``

export const AllButton = styled(BaseAllButton)``
