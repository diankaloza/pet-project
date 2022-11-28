import { ChangeEvent, useState } from 'react'

import { initialForm, I_UserCreateForm } from './data'

import * as S from './styles'

import { Select } from 'components/Select'
import { TextInput } from 'components/TextInput'
import { useActions } from 'hooks/useActions'
import { T_UserCreate } from 'models/users'

import * as C from 'styles/components'

interface I_UserCreateProps {
  onClose: () => void
}

export const UserCreate = ({ onClose }: I_UserCreateProps) => {
  const { createUser } = useActions()

  const [userForm, setUserForm] = useState<I_UserCreateForm>(initialForm)

  const validate = (): boolean => {
    let isValid = true
    if (userForm.name.value.trim().length < 3) {
      setUserForm((prev) => ({
        ...prev,
        name: { ...prev.name, error: 'User name must contain at least 3 characters' },
      }))
      isValid = false
    }
    if (userForm.age.value.trim().length < 2) {
      setUserForm((prev) => ({
        ...prev,
        age: { ...prev.age, error: 'Age field must contain at least 3 characters ' },
      }))
      isValid = false
    }
    if (userForm.locationId.value.trim().length === 0) {
      setUserForm((prev) => ({
        ...prev,
        locationId: { ...prev.locationId, error: 'Choose a location' },
      }))
      isValid = false
    }

    return isValid
  }
  console.log(userForm.locationId.value)

  const handleCreateUser = () => {
    if (validate()) {
      const user: T_UserCreate = {
        name: userForm.name.value,
        age: userForm.age.value,
        locationId: userForm.locationId.value,
      }

      setUserForm(initialForm)

      createUser(user)
      onClose()
    }
  }

  const chooseLocation = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserForm((prev) => ({
      ...prev,
      locationId: { ...prev.locationId, value: e.target.value, error: '' },
    }))
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name as keyof I_UserCreateForm
    console.log(inputName)
    setUserForm((prev) => ({
      ...prev,
      [inputName]: { ...prev[inputName], value: e.target.value, error: '' },
    }))
  }

  return (
    <S.ModalStyle>
      <S.ModalWindow>
        <S.ModalTitle display='flex'>
          <div>NEW USER</div>
          <S.Exit onClick={onClose}>X</S.Exit>
        </S.ModalTitle>

        <S.ModalInputArea>
          <TextInput
            type='text'
            placeholder='Name'
            name='name'
            value={userForm.name.value}
            onChange={handleChangeInput}
            isError={userForm.name.error}
          />

          <TextInput
            type='number'
            placeholder='Age'
            name='age'
            value={userForm.age.value}
            onChange={handleChangeInput}
            isError={userForm.age.error}
          />

          <Select
            isError={userForm.locationId.error}
            userForm={userForm}
            chooseLocation={(e) => chooseLocation(e)}
          />

          <S.Button width={150} onClick={handleCreateUser}>
            ADD USER
          </S.Button>
        </S.ModalInputArea>
      </S.ModalWindow>
      <C.Overlay onClick={onClose} />
    </S.ModalStyle>
  )
}
