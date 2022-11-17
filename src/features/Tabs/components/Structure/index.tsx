import { Content } from './styles'

import { useAppSelector } from 'hooks/useAppSelector'

export const StructurePanel = () => {
  const { users } = useAppSelector((state) => state.users)
  const { locations } = useAppSelector((state) => state.locations)
  return (
    <Content>
      <div>
        <h3> Users</h3>
        <pre> {JSON.stringify(users, null, 2)}</pre>
      </div>
      <div>
        <h3>Locations</h3>
        <pre> {JSON.stringify(locations, null, 2)}</pre>
      </div>
    </Content>
  )
}
