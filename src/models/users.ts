export interface I_User {
  id: string
  name: string
  age: string
  locationId: string
}

export type T_UserCreate = Omit<I_User, 'id'>
