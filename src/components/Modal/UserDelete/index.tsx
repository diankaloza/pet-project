import {
  Exit,
  ModalInput,
  ModalInputArea,
  ModalStyle,
  ModalTitle,
  ModalWindow,
} from 'components/Modal/UserCreate/style'
import { useActions } from 'hooks/useActions'

import { AllButton, Button } from 'styles/button'

interface I_UserDeleteProps {
  onClose: () => void
  id: string
}

export const UserDelete = ({ onClose, id }: I_UserDeleteProps) => {
  const { deleteUser } = useActions()

  const handleRemoveUser = () => {
    deleteUser(id)
    onClose()
  }

  return (
    <ModalStyle onClick={onClose}>
      <ModalWindow onClick={(e) => e.stopPropagation()}>
        <ModalTitle display='flex'>
          <div>Do you want delete this user?</div>
          <Exit onClick={onClose}>X</Exit>
        </ModalTitle>
        <AllButton>
          <Button onClick={handleRemoveUser} width={150}>
            {' '}
            YES
          </Button>

          <Button onClick={onClose} width={150}>
            NO
          </Button>
        </AllButton>
      </ModalWindow>
    </ModalStyle>
  )
}
