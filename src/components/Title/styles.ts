import styled from 'styled-components'
import { colors } from 'styles/global'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.grayPrimary};
`

export const Heading = styled.h1`
  padding-top: 84px;
  font-size: 200px;
  line-height: 0.8;
`

export const Description = styled.p`
  font-size: 36px;
  font-weight: bold;
  width: 70%;
  text-align: center;
`
