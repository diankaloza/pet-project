import { configureStore } from '@reduxjs/toolkit'

import { locationReducer } from './location'

import { usersReducer } from './users'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    locations: locationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
