import * as S from './styles'

import { I_Tab } from '../../models'

interface I_TabProps {
  selectedId: string
  tabBar: I_Tab[]
  onClick: (id: string) => void
}

export const TabBar: React.FC<I_TabProps> = ({ selectedId, tabBar, onClick }) => {
  return (
    <div>
      <S.TabsStyle>
        {tabBar.map((tabBarItem) => (
          <S.Tab
            key={tabBarItem.id}
            isActive={selectedId === tabBarItem.id}
            onClick={() => onClick(tabBarItem.id)}
          >
            <div> {tabBarItem.label}</div>
          </S.Tab>
        ))}
      </S.TabsStyle>
    </div>
  )
}
