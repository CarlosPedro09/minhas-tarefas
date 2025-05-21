import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  height: 32px;
  width: 32px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  bottom: 10px;
  right: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
`
