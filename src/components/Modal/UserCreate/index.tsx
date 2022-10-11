import { ChangeEvent, useState } from 'react'

import {
  Exit,
  ModalInput,
  ModalInputArea,
  ModalStyle,
  ModalTitle,
  ModalWindow,
} from 'components/Modal/UserCreate/style'

import { useActions } from 'hooks/useActions'
import { T_UserCreate } from 'models/users'
import { Button } from 'styles/button'

interface I_UserCreateProps {
  onClose: () => void
}

export const UserCreate = ({ onClose }: I_UserCreateProps) => {
  const { createUser } = useActions()

  const [userForm, setUserForm] = useState<T_UserCreate>({ name: '', age: '', locationId: '' })

  const handleCreateUser = () => {
    setUserForm({ name: '', age: '', locationId: '' })
    createUser(userForm)
    onClose()
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <ModalStyle onClick={onClose}>
      <ModalWindow onClick={(event) => event.stopPropagation()}>
        <ModalTitle display='flex'>
          <div>NEW USER</div>
          <Exit onClick={onClose}>X</Exit>
        </ModalTitle>
        <ModalInputArea>
          <ModalInput
            type='text'
            placeholder='Name'
            name='name'
            value={userForm.name}
            onChange={handleChangeInput}
          />
          <ModalInput
            type='number'
            placeholder='Age'
            name='age'
            value={userForm.age}
            onChange={handleChangeInput}
          />
          <ModalInput
            type='text'
            placeholder='Location'
            name='locationId'
            value={userForm.locationId}
            onChange={handleChangeInput}
          />
          <Button width={150} onClick={handleCreateUser}>
            ADD USER
          </Button>
        </ModalInputArea>
      </ModalWindow>
    </ModalStyle>
  )
}
