import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { I_User } from 'models/users'

import { userData } from 'store/users/data'

interface UsersStore {
  users: I_User[]
}
const initialState: UsersStore = {
  users: userData,
}

export const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter((user) => user.id !== action.payload)
    },
    createUser(state, action: PayloadAction<I_User>) {
      const user: I_User = { ...action.payload, id: '...' }
      state.users.push(user)
    },
  },
})

export const usersReducer = UsersSlice.reducer
export const usersAction = UsersSlice.actions
