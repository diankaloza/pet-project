import * as S from './styles'

import { useActions } from 'hooks/useActions'

import * as C from 'styles/components'

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
    <S.ModalStyle>
      <S.ModalWindow>
        <S.ModalTitle display='flex'>
          <div>Do you want delete this location?</div>
          <S.Exit onClick={onClose}>X</S.Exit>
        </S.ModalTitle>
        <S.AllButton>
          <S.Button onClick={handleRemoveLocation} width={150}>
            {' '}
            YES
          </S.Button>

          <S.Button onClick={onClose} width={150}>
            NO
          </S.Button>
        </S.AllButton>
      </S.ModalWindow>
      <C.Overlay onClick={onClose} />
    </S.ModalStyle>
  )
}
