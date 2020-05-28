import React from 'react'
import styled from '@emotion/styled'

const Span = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`

function Emoji({ emoji, label }) {
  return (
    <Span role='img' aria-label={label}>
      {emoji}
    </Span>
  )
}

export { Emoji }
