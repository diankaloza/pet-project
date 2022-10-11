import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { I_User, T_UserCreate } from 'models/users'
import { userData } from 'store/users/data'
import { generateUserId } from 'utils/helpers/generators'

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
    createUser(state, action: PayloadAction<T_UserCreate>) {
      const user: I_User = {
        ...action.payload,
        id: generateUserId(),
      }
      state.users.push(user)
    },
    updateUser(state, action: PayloadAction<I_User>) {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user,
      )
    },
  },
})

export const usersReducer = UsersSlice.reducer
export const usersAction = UsersSlice.actions
