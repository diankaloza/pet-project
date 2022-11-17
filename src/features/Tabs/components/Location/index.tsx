import { useState } from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

import { ButtonAdd, TableWrapper, TabHead, Table, Tboby, Td, Th } from './styles'

import { LocationCreate } from 'components/Modal/LocationCreate'
import { LocationDelete } from 'components/Modal/LocationDelete'
import { UpdateLocationModal } from 'components/Modal/LocationUpdate'
import { useAppSelector } from 'hooks/useAppSelector'
import { I_Location } from 'models/location'

export const LocationInfo = () => {
  const { locations } = useAppSelector((state) => state.locations)

  const [locationDeleteModal, setLocationDeleteModal] = useState(false)
  const [currentLocationId, setCurrentLocationId] = useState('')
  const [currentLocation, setCurrentLocation] = useState<I_Location>({
    id: '',
    country: '',
    city: '',
  })
  const [locationCreateModal, setLocationCreateModal] = useState(false)
  const [locationUpdateModal, setLocationUpdateModal] = useState(false)

  const handleOpenDeleteModal = (id: string) => {
    setCurrentLocationId(id)
    setLocationDeleteModal(true)
  }

  const handleCloseDeleteModal = () => {
    setLocationDeleteModal(false)
  }
  const handleOpenCreateModal = () => {
    setLocationCreateModal(true)
  }

  const handleCloseCreateModal = () => {
    setLocationCreateModal(false)
  }
  const handleOpenUpdateModal = (location: I_Location) => () => {
    setCurrentLocation(location)
    setLocationUpdateModal(true)
  }

  const handleCloseUpdateModal = () => {
    setLocationUpdateModal(false)
  }
  return (
    <TableWrapper>
      <Table>
        <TabHead>
          <tr>
            <Th>№</Th>
            <Th>Country</Th>
            <Th>City</Th>
            <th>
              {' '}
              <ButtonAdd onClick={handleOpenCreateModal}>ADD NEW</ButtonAdd>
            </th>
          </tr>
        </TabHead>
        <Tboby>
          {locations.map((location: I_Location, ind: number) => (
            <tr key={location.id}>
              <Td>{ind + 1}</Td>
              <Td>{location.country}</Td>
              <Td>{location.city}</Td>
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
                    onClick={handleOpenUpdateModal(location)}
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
                    onClick={() => handleOpenDeleteModal(location.id)}
                  />{' '}
                </div>
              </Td>
            </tr>
          ))}
        </Tboby>
      </Table>
      {locationDeleteModal && (
        <LocationDelete id={currentLocationId} onClose={handleCloseDeleteModal} />
      )}
      {locationCreateModal && <LocationCreate onClose={handleCloseCreateModal} />}
      {locationUpdateModal && (
        <UpdateLocationModal onClose={handleCloseUpdateModal} location={currentLocation} />
      )}
    </TableWrapper>
  )
}
