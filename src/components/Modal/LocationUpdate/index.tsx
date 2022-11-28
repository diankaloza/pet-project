import { ChangeEvent, useState } from 'react'

import * as S from './styles'

import { TextInput } from 'components/TextInput'
import { useActions } from 'hooks/useActions'
import { I_Location, I_LocationUpdate } from 'models/location'
import * as C from 'styles/components'

interface I_LocationProps {
  onClose: () => void
  location: I_Location
}

export const UpdateLocationModal = ({ onClose, location }: I_LocationProps) => {
  const { updateLocation } = useActions()
  const [locationForm, setLocationForm] = useState<I_LocationUpdate>({
    country: { value: location.country, error: '' },
    city: { value: location.city, error: '' },
  })

  const validate = (): boolean => {
    let isValid = true
    if (locationForm.country.value.trim().length < 3) {
      setLocationForm((prev) => ({
        ...prev,
        country: { ...prev.country, error: 'Country field must be contain at least 3 characters' },
      }))
      isValid = false
    }
    if (locationForm.city.value.trim().length < 2) {
      setLocationForm((prev) => ({
        ...prev,
        city: { ...prev.city, error: 'City field must be contain at least 3 characters' },
      }))
      isValid = false
    }
    return isValid
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name as keyof I_LocationUpdate
    console.log(inputName)
    setLocationForm((prev) => ({
      ...prev,
      [inputName]: { ...prev[inputName], value: e.target.value, error: '' },
    }))
  }
  const changeLocation = () => {
    if (validate()) {
      const changedLocation = {
        country: locationForm.country.value,
        city: locationForm.city.value,
      } as I_Location
      updateLocation({ ...changedLocation, id: location.id })
      onClose()
    }
  }
  return (
    <S.ModalStyle>
      <S.ModalWindow>
        <S.ModalTitle display='flex'>
          <div> What do you want to change?</div>
          <S.Exit onClick={onClose}>X</S.Exit>
        </S.ModalTitle>
        <S.ModalInputArea>
          <TextInput
            type='text'
            name='country'
            placeholder='Country'
            value={locationForm.country.value}
            onChange={handleChangeInput}
            isError={locationForm.country.error}
          />
          <TextInput
            type='text'
            placeholder='City'
            value={locationForm.city.value}
            name='city'
            onChange={handleChangeInput}
            isError={locationForm.city.error}
          />

          <S.Button onClick={changeLocation} width={150}>
            CHANGE USER
          </S.Button>
        </S.ModalInputArea>
      </S.ModalWindow>
      <C.Overlay onClick={onClose} />
    </S.ModalStyle>
  )
}
