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
    <ModalStyle onClick={onClose}>
      <ModalWindow onClick={(event) => event.stopPropagation()}>
        <ModalTitle display='flex'>
          <div> What do you want to change?</div>
          <Exit onClick={onClose}>X</Exit>
        </ModalTitle>
        <ModalInputArea>
          <ModalInput
            type='text'
            name='country'
            placeholder='Country'
            value={locationForm.country}
            onChange={handleChangeInput}
          />
          <ModalInput
            type='text'
            placeholder='City'
            value={locationForm.city}
            name='city'
            onChange={handleChangeInput}
          />

          <Button onClick={changeLocation} width={150}>
            CHANGE USER
          </Button>
        </ModalInputArea>
      </ModalWindow>
    </ModalStyle>
  )
}
