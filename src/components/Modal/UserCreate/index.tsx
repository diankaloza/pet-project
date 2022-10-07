import {
  Exit,
  ModalInput,
  ModalInputArea,
  ModalStyle,
  ModalTitle,
  ModalWindow,
} from 'components/Modal/UserCreate/style'

import { Button } from 'styles/button'

interface I_UserCreateProps {
  onClose: () => void
}

export const UserCreate = ({ onClose }: I_UserCreateProps) => {
  // Создать стэйт для формы

  // По клику на кнопку "Create" вызывать метод handleCreate
  // Который проверяет поля (валидирует)((не пустые))
  // Вызывать функцию для создания пользователя в RTK

  return (
    <ModalStyle onClick={onClose}>
      <ModalWindow onClick={(event) => event.stopPropagation()}>
        <ModalTitle display='flex'>
          <div>NEW USER</div>
          <Exit onClick={onClose}>X</Exit>
        </ModalTitle>
        <ModalInputArea>
          <ModalInput type='text' placeholder='Name' />
          <ModalInput type='number' placeholder='Age' />
          <ModalInput type='text' placeholder='Location' />
          <Button width={150}> ADD USER </Button>
        </ModalInputArea>
      </ModalWindow>
      {/* КНОПКА */}
      {/* МЯУ ТЕБЯ */}
    </ModalStyle>
  )
}
