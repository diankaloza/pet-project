import styled from 'styled-components'

interface ButtonProps {
  width: number
  margin?: number
}

export const Button = styled.button<ButtonProps>`
  padding: 10px 20px;

  color: white;
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #414345, #232526); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #414345,
    #232526
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 10px;
  border: 1px solid #508d8d;
  font-family: 'Monoton', cursive;
  cursor: pointer;
  :hover {
    box-shadow: 3px 3px 3px 2px #496161;
  }
  :active {
    background-color: #495454;
  }
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
`

export const AllButton = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-around;
`
