import React from 'react'

import { I_Tab } from './models'

import { Tab, TabsStyle } from './style'

interface I_TabProps {
  selectedId: string
  tabBar: I_Tab[]
  onClick: (id: string) => void
}

export const TabBar: React.FC<I_TabProps> = ({ selectedId, tabBar, onClick }) => {
  return (
    <div>
      <TabsStyle>
        {tabBar.map((tabBarItem) => (
          <Tab key={tabBarItem.id} onClick={() => onClick(tabBarItem.id)}>
            <div> {tabBarItem.label}</div>
          </Tab>
        ))}
      </TabsStyle>
    </div>
  )
}
