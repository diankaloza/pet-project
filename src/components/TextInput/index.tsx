import { ChangeEventHandler } from 'react'

import * as S from 'components/Modal/UserCreate/style'

export interface I_TextInputProps {
  type: 'text' | 'number'
  placeholder: string
  name: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const TextInput: React.FC<I_TextInputProps> = ({
  type,
  placeholder,
  name,
  value,
  onChange,
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
    </>
  )
}
