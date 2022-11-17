import { ChangeEvent, useState } from 'react'

import { initialFormLocation, I_LocationCreateForm } from './data'

import * as S from '../UserCreate/style'

import { useActions } from 'hooks/useActions'

import { I_Location } from 'models/location'
import { Button } from 'styles/button'

interface I_LocationProps {
  onClose: () => void
}

export const LocationCreate = ({ onClose }: I_LocationProps) => {
  const { createLocation } = useActions()
  const [locationForm, setLocationForm] = useState<I_LocationCreateForm>(initialFormLocation)
  const validate = (): boolean => {
    let isValid = true
    if (locationForm.country.value.trim().length < 3) {
      setLocationForm((prev) => ({
        ...prev,
        country: {
          ...prev.country,
          error: 'Country name field must contain at least 3 characters ',
        },
      }))
      isValid = false
    }

    if (locationForm.city.value.trim().length < 3) {
      setLocationForm((prev) => ({
        ...prev,
        city: { ...prev.city, error: ' City name field must contain at least 3 characters' },
      }))
      isValid = false
    }
    return isValid
  }
  const handleCreateLocation = () => {
    if (validate()) {
      const location: I_Location = {
        id: locationForm.id.value,
        country: locationForm.country.value,
        city: locationForm.city.value,
      }

      setLocationForm(locationForm)
      createLocation(location)
      onClose()
    }
  }
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name as keyof I_LocationCreateForm
    setLocationForm((prev) => ({
      ...prev,
      [inputName]: { ...prev[inputName], value: e.target.value, error: '' },
    }))
  }

  return (
    <S.ModalStyle onClick={onClose}>
      <S.ModalWindow onClick={(event) => event.stopPropagation()}>
        <S.ModalTitle display='flex'>
          <div>NEW LOCATION</div>
          <S.Exit onClick={onClose}>X</S.Exit>
        </S.ModalTitle>
        <S.ModalInputArea>
          <S.ModalInput
            type='text'
            placeholder='Country'
            name='country'
            value={locationForm.country.value}
            onChange={handleChangeInput}
          />
          {locationForm.country.error && <S.ErrorStyle>{locationForm.country.error}</S.ErrorStyle>}
          <S.ModalInput
            type='text'
            placeholder='City'
            name='city'
            value={locationForm.city.value}
            onChange={handleChangeInput}
          />
          {locationForm.city.error && <S.ErrorStyle>{locationForm.city.error}</S.ErrorStyle>}

          <Button width={150} onClick={handleCreateLocation}>
            ADD LOCATION
          </Button>
        </S.ModalInputArea>
      </S.ModalWindow>
    </S.ModalStyle>
  )
}
