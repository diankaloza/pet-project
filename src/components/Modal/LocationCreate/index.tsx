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
import { Button } from 'styles/button'

interface I_LocationProps {
  onClose: () => void
}

export const LocationCreate = ({ onClose }: I_LocationProps) => {
  const { createLocation } = useActions()
  const [locationForm, setLocationForm] = useState({
    id: '',
    country: '',
    city: '',
  })

  const handleCreateLocation = () => {
    setLocationForm({ country: '', city: '', id: '' })
    createLocation(locationForm)
    onClose()
  }
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLocationForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <ModalStyle onClick={onClose}>
      <ModalWindow onClick={(event) => event.stopPropagation()}>
        <ModalTitle display='flex'>
          <div>NEW LOCATION</div>
          <Exit onClick={onClose}>X</Exit>
        </ModalTitle>
        <ModalInputArea>
          <ModalInput
            type='text'
            placeholder='Country'
            name='country'
            value={locationForm.country}
            onChange={handleChangeInput}
          />
          <ModalInput
            type='text'
            placeholder='City'
            name='city'
            value={locationForm.city}
            onChange={handleChangeInput}
          />

          <Button width={150} onClick={handleCreateLocation}>
            ADD LOCATION
          </Button>
        </ModalInputArea>
      </ModalWindow>
    </ModalStyle>
  )
}
