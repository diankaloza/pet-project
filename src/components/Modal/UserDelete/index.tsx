import * as S from './styles'

import { useActions } from 'hooks/useActions'

import * as C from 'styles/components'

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
    <S.ModalStyle>
      <S.ModalWindow>
        <S.ModalTitle display='flex'>
          <div>Do you want delete this user?</div>
          <S.Exit onClick={onClose}>X</S.Exit>
        </S.ModalTitle>
        <S.AllButton>
          <S.Button onClick={handleRemoveUser} width={150}>
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
