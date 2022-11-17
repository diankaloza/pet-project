import { ChangeEvent } from 'react'

import { initialForm } from 'components/Modal/UserCreate/data'

import * as S from 'components/Modal/UserCreate/style'
import { useAppSelector } from 'hooks/useAppSelector'

interface I_SelectProps {
  userForm: typeof initialForm
  chooseLocation: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const Select: React.FC<I_SelectProps> = ({ userForm, chooseLocation }) => {
  const { locations } = useAppSelector((state) => state.locations)

  return (
    <S.ModalSelect placeholder='location' onChange={chooseLocation}>
      <option hidden disabled selected>
        Location
      </option>
      {locations.map((location) => (
        <option key={location.id} value={location.id}>
          {location.country}, {location.city}
        </option>
      ))}
    </S.ModalSelect>
  )
}
