import { T_TextInput } from 'models/form'

export interface I_UserUpdateForm {
  name: T_TextInput
  age: T_TextInput
  locationId: T_TextInput
  id: string
}

export const updateForm: I_UserUpdateForm = {
  name: { value: '', error: '' },
  age: { value: '', error: '' },
  locationId: { value: '', error: '' },
  id: '',
}
