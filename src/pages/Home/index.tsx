import { AiOutlineCheck } from 'react-icons/ai'
import { IoLogoReact } from 'react-icons/io5'
import { SiRedux } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'

import { Tabs } from 'features/Tabs'
import { BodyContent, BodyTitle, List, ListTitle } from 'styles/style'

export const HomePage = () => {
  return (
    <BodyContent>
      <div>
        <BodyTitle> Simple CRUD App</BodyTitle>

        <ListTitle> Technologies</ListTitle>
        <List>
          {' '}
          <IoLogoReact size={20} color='#1451fb' /> React
        </List>
        <List>
          {' '}
          <SiRedux size={20} color='#d500f9' /> Redux Toolkit
        </List>
        <List>
          {' '}
          <SiTypescript size={20} color='#00bcd4' />
          TypeScript
        </List>
        <List>
          {' '}
          <AiOutlineCheck size={20} color='#2e7d32' /> Styled Components
        </List>
        <List>
          {' '}
          <IoLogoReact size={20} color='red' /> React Icons{' '}
        </List>
      </div>
      <Tabs />
    </BodyContent>
  )
}
