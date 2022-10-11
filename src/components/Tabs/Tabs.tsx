import { useState } from 'react'

import { TabBar } from './index'

import { tabs } from './data'

import { StructurePanel } from 'components/Structure'
import { UserInfo } from 'components/Users/UsersInfo'

export const Tabs = () => {
  const [selectedId, setSelectedId] = useState('')

  const handleTabClick = (id: string) => {
    setSelectedId(id)
  }

  return (
    <div>
      <TabBar selectedId={selectedId} tabBar={tabs} onClick={handleTabClick} />
      {selectedId === tabs[0].id && <UserInfo />}
      {selectedId === tabs[1].id && <StructurePanel />}
    </div>
  )
}
