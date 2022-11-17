import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { I_Location } from 'models/location'

import { locationData } from 'store/location/data'
import { generateUserId } from 'utils/helpers/generators'

interface LocationStore {
  locations: I_Location[]
}

const initialState: LocationStore = {
  locations: locationData,
}

export const LocationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    deleteLocation(state, action: PayloadAction<string>) {
      state.locations = state.locations.filter((location) => location.id !== action.payload)
    },
    createLocation(state, action: PayloadAction<I_Location>) {
      const location: I_Location = {
        ...action.payload,
        id: generateUserId(),
      }
      state.locations.push(location)
    },
    updateLocation(state, action: PayloadAction<I_Location>) {
      state.locations = state.locations.map((location) =>
        location.id === action.payload.id ? action.payload : location,
      )
    },
  },
})

export const locationReducer = LocationSlice.reducer
export const locationAction = LocationSlice.actions
