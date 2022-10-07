import { useState } from 'react'

import { UserCreate } from 'components/Modal/UserCreate'

import { UserDelete } from 'components/Modal/UserDelete'

import { useActions } from 'hooks/useActions'
import { useUsersSelector } from 'hooks/useUsersSelector'

import { I_User } from 'models/users'

export const UserInfo = () => {
  const { users } = useUsersSelector((state) => state.users)
  const { deleteUser } = useActions()

  const [userCreateModal, setUserCreateModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const handleRemoveUser = (id: string) => {
    deleteUser(id)
  }

  const handleCloseUserCreateModal = () => {
    setUserCreateModal(false)
  }

  const handleOpenUserCreateModal = () => {
    setUserCreateModal(true)
  }

  const deleteOpenModal = () => {
    setOpenDeleteModal(true)
  }

  const deleteCloseModal = () => {
    setOpenDeleteModal(false)
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>
              <button onClick={handleOpenUserCreateModal}>ADD NEW</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: I_User, ind: number) => (
            <tr key={user.id}>
              <td>{ind + 1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.locationId}</td>
              <td>
                <button>change</button>
                <button onClick={deleteOpenModal}>del</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {userCreateModal && <UserCreate onClose={handleCloseUserCreateModal} />}
      {openDeleteModal && <UserDelete deleteUs={handleRemoveUser} onClose={deleteCloseModal} />}
    </>
  )
}
