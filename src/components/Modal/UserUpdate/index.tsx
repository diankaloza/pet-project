import { ChangeEvent, useState } from 'react'

import * as S from '../UserCreate/style'

import { useActions } from 'hooks/useActions'

import { useAppSelector } from 'hooks/useAppSelector'
import { I_User, T_UserCreate } from 'models/users'
import { Button } from 'styles/button'

interface I_UpdateUserProps {
  onClose: () => void
  user: I_User
}

export const UpDateUserModal = ({ onClose, user }: I_UpdateUserProps) => {
  const { locations } = useAppSelector((state) => state.locations)
  const { updateUser } = useActions()

  const changeUserLocation = (e: any) => {
    console.log(e.target.value)
    console.log(userForm)
    setFormUser((prev) => ({
      ...prev,
      locationId: e.target.value,
    }))
  }
  const [userForm, setFormUser] = useState({
    name: user.name,
    age: user.age,
    locationId: user.locationId,
  })

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const changeUserInfo = () => {
    updateUser({ ...userForm, id: user.id })
    onClose()
  }

  return (
    <S.ModalStyle onClick={onClose}>
      <S.ModalWindow onClick={(event) => event.stopPropagation()}>
        <S.ModalTitle display='flex'>
          <div> What do you want to change?</div>
          <S.Exit onClick={onClose}>X</S.Exit>
        </S.ModalTitle>
        <S.ModalInputArea>
          <S.ModalInput
            type='text'
            name='name'
            placeholder='Name'
            value={userForm.name}
            onChange={handleChangeInput}
          />
          <S.ModalInput
            type='number'
            placeholder='Age'
            value={userForm.age}
            name='age'
            onChange={handleChangeInput}
          />

          <S.ModalSelect value={userForm.locationId} onChange={changeUserLocation}>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.country}, {location.city}
              </option>
            ))}
          </S.ModalSelect>
          <Button width={150} onClick={changeUserInfo}>
            CHANGE USER
          </Button>
        </S.ModalInputArea>
      </S.ModalWindow>
    </S.ModalStyle>
  )
}
