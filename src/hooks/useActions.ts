import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { locationAction } from 'store/location'

import { usersAction } from 'store/users'

const action = {
  ...usersAction,
  ...locationAction,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(action, dispatch)
}
