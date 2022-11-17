import { useState } from 'react'

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

import { ButtonAdd, TabHead, Table, TableWrapper, Tboby, Td, Th } from './styles'

import { UserCreate } from 'components/Modal/UserCreate'
import { UserDelete } from 'components/Modal/UserDelete'
import { UpDateUserModal } from 'components/Modal/UserUpdate/index'

import { useAppSelector } from 'hooks/useAppSelector'
import { I_User } from 'models/users'

export const UserInfo = () => {
  const { users } = useAppSelector((state) => state.users)
  const { locations } = useAppSelector((state) => state.locations)

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

  const getUserLocation = (locationId: string) => {
    const location = locations.find((location) => location.id === locationId)
    return location ? `${location.country}, ${location.city}` : '-'
  }

  return (
    <TableWrapper>
      <Table>
        <TabHead>
          <tr>
            <Th>№</Th>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Location</Th>
            <th>
              {' '}
              <ButtonAdd onClick={handleOpenUserCreateModal}>ADD NEW</ButtonAdd>
            </th>
          </tr>
        </TabHead>
        <Tboby>
          {users.map((user: I_User, ind: number) => (
            <tr key={user.id}>
              <Td>{ind + 1}</Td>
              <Td>{user.name}</Td>
              <Td>{user.age}</Td>
              <Td>{getUserLocation(user.locationId)}</Td>
              <Td>
                <div>
                  <AiOutlineEdit
                    color='black'
                    size={28}
                    style={{
                      border: '1px solid black',
                      cursor: 'pointer',

                      borderRadius: '5px',
                      boxShadow: '2px 2px 2px 2px black',
                    }}
                    onClick={() => handleOpenUpdateModal(user)}
                  />{' '}
                  <AiOutlineDelete
                    color='black'
                    size={28}
                    style={{
                      border: '1px solid black',
                      cursor: 'pointer',
                      borderRadius: '5px',
                      boxShadow: '2px 2px 2px 2px black',
                    }}
                    onClick={() => handleOpenDeleteModal(user.id)}
                  />{' '}
                </div>
              </Td>
            </tr>
          ))}
        </Tboby>
      </Table>

      {userCreateModal && <UserCreate onClose={handleCloseUserCreateModal} />}
      {userDeleteModal && <UserDelete id={currentUserId} onClose={handleDeleteCloseModal} />}
      {userUpdateModal && <UpDateUserModal user={currentUser} onClose={handleCloseUpdateUser} />}
    </TableWrapper>
  )
}
