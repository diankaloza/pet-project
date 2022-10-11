import { useAppSelector } from 'hooks/useAppSelector'

export const StructurePanel = () => {
  const { users } = useAppSelector((state) => state.users)
  return (
    <div>
      <div> Users</div>
      <pre> {JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}
