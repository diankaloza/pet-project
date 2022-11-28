import { ChangeEvent, useState } from 'react'

import * as S from './styles'

import { I_UserCreateForm } from '../UserCreate/data'

import { TextInput } from 'components/TextInput'
import { useActions } from 'hooks/useActions'
import { useAppSelector } from 'hooks/useAppSelector'
import { I_User } from 'models/users'

import * as C from 'styles/components'

interface I_UpdateUserProps {
  onClose: () => void
  user: I_User
}

export const UpDateUserModal = ({ onClose, user }: I_UpdateUserProps) => {
  const { locations } = useAppSelector((state) => state.locations)
  const { updateUser } = useActions()

  const [userForm, setFormUser] = useState<I_UserCreateForm>({
    name: { value: user.name, error: '' },
    age: { value: user.age, error: '' },
    locationId: {
      value: '',
      error: '',
      // value: locations.some((location: I_Location) => location.id === user.locationId)
      //   ? user.locationId
      //   : '',
      // error: '',
    },
  })
  console.log(userForm.locationId.value)

  console.log(userForm.name.value)

  console.log(userForm.age.value)

  const validate = (): boolean => {
    let isValid = true
    if (userForm.name.value.trim().length < 3) {
      setFormUser((prev) => ({
        ...prev,
        name: { ...prev.name, error: 'User name must contain at least 3 characters' },
      }))
      isValid = false
    }
    if (userForm.age.value.length < 2) {
      setFormUser((prev) => ({
        ...prev,
        age: { ...prev.age, error: 'Age field must contain at least 2 characters ' },
      }))
      isValid = false
    }
    if (userForm.locationId.value === '') {
      setFormUser((prev) => ({
        ...prev,
        locationId: { ...prev.locationId, error: 'Choose a location' },
      }))
      isValid = false
    }
    console.log(isValid)
    return isValid
  }

  const changeUserLocation = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormUser((prev) => ({
      ...prev,
      locationId: { ...prev.locationId, value: e.target.value, error: '' },
    }))
  }
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name as keyof I_UserCreateForm
    setFormUser((prev) => ({
      ...prev,
      [inputName]: { ...prev[inputName], value: e.target.value, error: '' },
    }))
  }

  const changeUserInfo = () => {
    if (validate()) {
      const changedUser = {
        name: userForm.name.value,
        age: userForm.age.value,
        locationId: userForm.locationId.value,
      } as I_User
      updateUser({ ...changedUser, id: user.id })
      onClose()
    }
  }

  return (
    <S.ModalStyle>
      <S.ModalWindow>
        <S.ModalTitle display='flex'>
          <div> What do you want to change?</div>
          <S.Exit onClick={onClose}>X</S.Exit>
        </S.ModalTitle>
        <S.ModalInputArea>
          <TextInput
            type='text'
            name='name'
            placeholder='Name'
            value={userForm.name.value}
            onChange={handleChangeInput}
            isError={userForm.name.error}
          />

          <TextInput
            type='number'
            placeholder='Age'
            value={userForm.age.value}
            name='age'
            onChange={handleChangeInput}
            isError={userForm.age.error}
          />

          <S.ModalSelect placeholder='location' onChange={changeUserLocation}>
            <option hidden disabled selected>
              Location
            </option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.country}, {location.city}
              </option>
            ))}
          </S.ModalSelect>
          {userForm.locationId.value === '' ? (
            <S.ErrorStyle>{userForm.locationId.error}</S.ErrorStyle>
          ) : (
            <S.EmptyError> </S.EmptyError>
          )}

          <S.Button width={150} onClick={changeUserInfo}>
            Save
          </S.Button>
        </S.ModalInputArea>
      </S.ModalWindow>
      <C.Overlay onClick={onClose} />
    </S.ModalStyle>
  )
}
