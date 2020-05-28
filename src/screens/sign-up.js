import React from 'react'
import { useVisible } from '../hooks'
import { Card, Form, Button } from '../components/styles'
import { Modal, Emoji } from '../components'

function SignUp() {
  const [visible, toggleVisible] = useVisible(true)

  return (
    <React.Fragment>
      <Card style={{ marginTop: '3rem' }}>
        <h1>Sign Up</h1>
        <Form>
          <fieldset disabled={false} aria-busy={false}>
            <label htmlFor='email'>
              Email
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                required
              />
            </label>
            <label htmlFor='password'>
              Password
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Password'
                required
              />
            </label>
            <Button
              type='submit'
              style={{ width: '100%', backgroundColor: '#2e4b84' }}
            >
              CREATE ACCOUNT
            </Button>
          </fieldset>
        </Form>
      </Card>
      <Modal visible={visible} hide={toggleVisible}>
        <h3>
          Dude the sign-up doesn't work yet
          <Emoji emoji={'😿'} label='Cat Smiling' />
        </h3>
      </Modal>
    </React.Fragment>
  )
}

export default SignUp
