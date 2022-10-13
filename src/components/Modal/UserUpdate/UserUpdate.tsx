import { ChangeEvent, useState } from 'react'

import {
  Exit,
  ModalInput,
  ModalInputArea,
  ModalStyle,
  ModalTitle,
  ModalWindow,
} from '../UserCreate/style'

import { useActions } from 'hooks/useActions'

import { I_User, T_UserCreate } from 'models/users'
import { Button } from 'styles/button'

interface I_UserCreateProps {
  onClose: () => void
  user: I_User
}

export const UpDateUserModal = ({ onClose, user }: I_UserCreateProps) => {
  const { updateUser } = useActions()
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
    <ModalStyle onClick={onClose}>
      <ModalWindow onClick={(event) => event.stopPropagation()}>
        <ModalTitle display='flex'>
          <div> What do you want to change?</div>
          <Exit onClick={onClose}>X</Exit>
        </ModalTitle>
        <ModalInputArea>
          <ModalInput
            type='text'
            name='name'
            placeholder='Name'
            value={userForm.name}
            onChange={handleChangeInput}
          />
          <ModalInput
            type='number'
            placeholder='Age'
            value={userForm.age}
            name='age'
            onChange={handleChangeInput}
          />
          <ModalInput
            type='text'
            placeholder='Location'
            name='locationId'
            value={userForm.locationId}
            onChange={handleChangeInput}
          />
          <Button width={150} onClick={changeUserInfo}>
            CHANGE USER
          </Button>
        </ModalInputArea>
      </ModalWindow>
    </ModalStyle>
  )
}
