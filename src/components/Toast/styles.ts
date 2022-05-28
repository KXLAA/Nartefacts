import styled from 'styled-components'

import { getBorder, getColor, getFontSize, getSize } from '@/styles/global'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: ${getColor('blackLight')};
  border: ${getBorder('sm', 'solid', 'grayLight')};
  border-radius: 4px;
  padding: ${getSize('xs')};
  cursor: pointer;

  span {
    border-radius: 4px;
  }
`

export const Text = styled.p`
  color: ${getColor('grayLight')};
  font-size: ${getFontSize('lg')};
  text-align: center;
  font-weight: bold;
  padding-top: ${getSize('xs')};
`
