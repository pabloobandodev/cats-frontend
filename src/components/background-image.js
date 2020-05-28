import React from 'react'
import styled from '@emotion/styled'
import image from '../assets/images/background.png'

const Img = styled.img`
  position: absolute;
  bottom: 0;
  margin-top: 1.3rem;
  z-index: -1;
`

function BackgroundImage() {
  return <Img src={image} alt='Image' />
}

export { BackgroundImage }
