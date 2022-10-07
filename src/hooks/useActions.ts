import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { usersAction } from 'store/users'

const action = {
  ...usersAction,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(action, dispatch)
}
