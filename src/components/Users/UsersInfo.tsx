import { useState } from 'react'

import { TabHead, Table, Tboby, Td, Th } from './style'

import { UserCreate } from 'components/Modal/UserCreate'
import { UserDelete } from 'components/Modal/UserDelete'
import { UpDateUserModal } from 'components/Modal/UserUpdate'
import { useAppSelector } from 'hooks/useAppSelector'
import { I_User } from 'models/users'

export const UserInfo = () => {
  const { users } = useAppSelector((state) => state.users)

  const [userCreateModal, setUserCreateModal] = useState(false)
  const [userDeleteModal, setUserDeleteModal] = useState(false)
  const [userUpdateModal, setUserUpDateModal] = useState(false)
  const [currentUserId, setCurrentUserId] = useState('')
  const [currentUser, setCurrentUser] = useState<I_User>({
    id: '',
    name: '',
    age: '',
    locationId: '',
  })

  const handleCloseUserCreateModal = () => {
    setUserCreateModal(false)
  }

  const handleOpenUserCreateModal = () => {
    setUserCreateModal(true)
  }

  const handleOpenDeleteModal = (id: string) => {
    setCurrentUserId(id)
    setUserDeleteModal(true)
  }

  const handleDeleteCloseModal = () => {
    setUserDeleteModal(false)
  }

  const handleOpenUpdateModal = (user: I_User) => {
    setCurrentUser(user)
    setUserUpDateModal(true)
  }

  const handleCloseUpdateUser = () => {
    setUserUpDateModal(false)
  }

  return (
    <>
      <Table>
        <TabHead>
          <tr>
            <Th>№</Th>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Location</Th>
            <th>
              <button onClick={handleOpenUserCreateModal}>ADD NEW</button>
            </th>
          </tr>
        </TabHead>
        <Tboby>
          {users.map((user: I_User, ind: number) => (
            <tr key={user.id}>
              <Td>{ind + 1}</Td>
              <Td>{user.name}</Td>
              <Td>{user.age}</Td>
              <Td>{user.locationId}</Td>
              <Td>
                <button onClick={() => handleOpenUpdateModal(user)}>change</button>
                <button onClick={() => handleOpenDeleteModal(user.id)}>del</button>
              </Td>
            </tr>
          ))}
        </Tboby>
      </Table>

      {userCreateModal && <UserCreate onClose={handleCloseUserCreateModal} />}
      {userDeleteModal && <UserDelete id={currentUserId} onClose={handleDeleteCloseModal} />}
      {userUpdateModal && <UpDateUserModal user={currentUser} onClose={handleCloseUpdateUser} />}
    </>
  )
}
