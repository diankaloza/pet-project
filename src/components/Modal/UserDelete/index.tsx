import {
  Exit,
  ModalInput,
  ModalInputArea,
  ModalStyle,
  ModalTitle,
  ModalWindow,
} from 'components/Modal/UserCreate/style'
import { useUsersSelector } from 'hooks/useUsersSelector'
import { userData } from 'store/users/data'

import { AllButton, Button } from 'styles/button'

interface I_UserDeleteProps {
  onClose: () => void
  deleteUs: (id: string) => void
}

export const UserDelete = ({ onClose, deleteUs }: I_UserDeleteProps) => (
  <ModalStyle onClick={onClose}>
    <ModalWindow onClick={(e) => e.stopPropagation()}>
      <ModalTitle display='flex'>
        <div>Do you want delete this user?</div>
        <Exit onClick={onClose}>X</Exit>
      </ModalTitle>
      <AllButton>
        <Button onClick={() => deleteUs()} width={150}>
          {' '}
          YES
        </Button>

        <Button width={150}>NO</Button>
      </AllButton>
    </ModalWindow>
  </ModalStyle>
)
