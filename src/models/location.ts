import { T_TextInput } from './form'

export interface I_Location {
  id: string
  country: string
  city: string
}

export interface I_LocationUpdate {
  country: T_TextInput
  city: T_TextInput
}
