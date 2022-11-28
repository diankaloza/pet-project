import { ChangeEventHandler } from 'react'

import * as S from './styles'

export interface I_TextInputProps {
  type: 'text' | 'number'
  placeholder: string
  name: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  isError: string
}

export const TextInput: React.FC<I_TextInputProps> = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  isError,
}) => {
  return (
    <>
      <S.ModalInput
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {isError ? <S.ErrorStyle>{isError}</S.ErrorStyle> : <S.EmptyError> </S.EmptyError>}
    </>
  )
}
