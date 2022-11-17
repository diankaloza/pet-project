import { T_TextInput } from 'models/form'

export interface I_LocationCreateForm {
  country: T_TextInput
  city: T_TextInput
  id: T_TextInput
}

export const initialFormLocation: I_LocationCreateForm = {
  country: { value: '', error: '' },
  city: { value: '', error: '' },
  id: { value: '', error: '' },
}
