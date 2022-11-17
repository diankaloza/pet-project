import { ChangeEvent, useState } from 'react'

import * as S from '../UserCreate/style'

import { useActions } from 'hooks/useActions'
import { I_Location } from 'models/location'
import { Button } from 'styles/button'

interface I_LocationProps {
  onClose: () => void
  location: I_Location
}

export const UpdateLocationModal = ({ onClose, location }: I_LocationProps) => {
  const { updateLocation } = useActions()
  const [locationForm, setLocationForm] = useState<I_Location>({
    id: location.id,
    country: location.country,
    city: location.city,
  })

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLocationForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const changeLocation = () => {
    updateLocation({ ...locationForm, id: location.id })
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
            name='country'
            placeholder='Country'
            value={locationForm.country}
            onChange={handleChangeInput}
          />
          <S.ModalInput
            type='text'
            placeholder='City'
            value={locationForm.city}
            name='city'
            onChange={handleChangeInput}
          />

          <Button onClick={changeLocation} width={150}>
            CHANGE USER
          </Button>
        </S.ModalInputArea>
      </S.ModalWindow>
    </S.ModalStyle>
  )
}
