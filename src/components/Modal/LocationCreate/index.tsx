import { ChangeEvent, useState } from 'react'

import { initialFormLocation, I_LocationCreateForm } from './data'

import * as S from './styles'

import { TextInput } from 'components/TextInput'
import { useActions } from 'hooks/useActions'

import { I_Location } from 'models/location'

import * as C from 'styles/components'

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
    <S.ModalStyle>
      <S.ModalWindow>
        <S.ModalTitle display='flex'>
          <div>NEW LOCATION</div>
          <S.Exit onClick={onClose}>X</S.Exit>
        </S.ModalTitle>
        <S.ModalInputArea>
          <TextInput
            type='text'
            placeholder='Country'
            name='country'
            value={locationForm.country.value}
            onChange={handleChangeInput}
            isError={locationForm.country.error}
          />

          <TextInput
            type='text'
            placeholder='City'
            name='city'
            value={locationForm.city.value}
            onChange={handleChangeInput}
            isError={locationForm.city.error}
          />

          <S.Button width={150} onClick={handleCreateLocation}>
            ADD LOCATION
          </S.Button>
        </S.ModalInputArea>
      </S.ModalWindow>
      <C.Overlay onClick={onClose} />
    </S.ModalStyle>
  )
}
