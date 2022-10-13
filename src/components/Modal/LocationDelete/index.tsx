import { Exit, ModalStyle, ModalTitle, ModalWindow } from '../UserCreate/style'

import { useActions } from 'hooks/useActions'
import { AllButton, Button } from 'styles/button'

interface I_LocationDeleteProps {
  onClose: () => void
  id: string
}

export const LocationDelete = ({ onClose, id }: I_LocationDeleteProps) => {
  const { deleteLocation } = useActions()

  const handleRemoveLocation = () => {
    deleteLocation(id)
    onClose()
  }
  return (
    <ModalStyle onClick={onClose}>
      <ModalWindow onClick={(e) => e.stopPropagation()}>
        <ModalTitle display='flex'>
          <div>Do you want delete this location?</div>
          <Exit onClick={onClose}>X</Exit>
        </ModalTitle>
        <AllButton>
          <Button onClick={handleRemoveLocation} width={150}>
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
