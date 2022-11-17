import { useState } from 'react'

import { LocationInfo, StructurePanel, UserInfo } from './components'
import { tabs } from './data'
import { TabBar } from './extensions/TabBar'

export const Tabs = () => {
  const [selectedId, setSelectedId] = useState(tabs[0].id)

  const handleTabClick = (id: string) => {
    setSelectedId(id)
  }

  return (
    <div>
      <TabBar selectedId={selectedId} tabBar={tabs} onClick={handleTabClick} />
      {selectedId === tabs[0].id && <UserInfo />}
      {selectedId === tabs[1].id && <LocationInfo />}
      {selectedId === tabs[2].id && <StructurePanel />}
    </div>
  )
}
