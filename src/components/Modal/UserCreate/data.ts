import { T_TextInput } from 'models/form'

export interface I_UserCreateForm {
  name: T_TextInput
  age: T_TextInput
  locationId: T_TextInput
}

export const initialForm: I_UserCreateForm = {
  name: { value: '', error: '' },
  age: { value: '', error: '' },
  locationId: { value: '', error: '' },
}
