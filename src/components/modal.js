import React from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

const ModalStyled = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
`

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`

const I = styled.i`
  cursor: pointer;
`

function Modal({ visible, children, hide }) {
  if (!visible) {
    return null
  }

  return ReactDOM.createPortal(
    <>
      <Overlay />
      <Wrapper aria-modal aria-hidden tabIndex={-1} role='dialog'>
        <ModalStyled>
          <Header>
            <I
              className='fas fa-times fa-lg'
              data-dismiss='modal'
              aria-label='Close'
              onClick={hide}
            />
          </Header>
          {children}
        </ModalStyled>
      </Wrapper>
    </>,
    document.body
  )
}

export { Modal }
