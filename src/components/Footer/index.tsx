import { FooterStyle } from 'components/Footer/styles'
import { LinkStyle } from 'components/Footer/styles'

export const Footer = () => {
  return (
    <FooterStyle>
      <div>
        {' '}
        Developed by{' '}
        <LinkStyle href='https://github.com/diankaloza' target='_blank'>
          {' '}
          Diana Loza
        </LinkStyle>{' '}
        2022
      </div>
    </FooterStyle>
  )
}
