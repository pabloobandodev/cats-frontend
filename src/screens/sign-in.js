import React from 'react'
import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context'
import { useVisible } from '../hooks'
import { Card, Form, Button } from '../components/styles'
import { Modal, Emoji } from '../components'
import { loginQuery } from '../services/queries'

const Error = styled.p`
  font-size: 2rem;
  color: red;
  text-align: center;
`

const INITIAL_STATE = {
  email: 'ricksanchez@yopmail.com',
  password: '1234',
  error: '',
}

function SignIn() {
  const [formData, setFormData] = React.useState(INITIAL_STATE)
  const history = useHistory()
  const [, setIdAuth] = useAuth()
  const [visible, toggleVisible] = useVisible(true)

  const formHandler = async (e) => {
    e.preventDefault()

    const { success, id } = await loginQuery(formData)

    console.log({ success, id })

    if (!success) {
      setFormData({ ...INITIAL_STATE, error: 'WRONG CREDENTIALS 😿' })
      return
    }

    setIdAuth(id)
    history.push(`/`)
  }

  const inputHandler = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <React.Fragment>
      <Card style={{ marginTop: '3rem' }}>
        <h1>Sign In</h1>
        {formData.error && <Error>{formData.error}</Error>}
        <Form onSubmit={formHandler}>
          <fieldset disabled={false} aria-busy={false}>
            <label htmlFor='email'>
              Email
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                required
                value={formData.email}
                onChange={inputHandler}
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
                value={formData.password}
                onChange={inputHandler}
              />
            </label>
            <Button
              type='submit'
              style={{ width: '100%', backgroundColor: '#2e4b84' }}
            >
              SUBMIT
            </Button>
          </fieldset>
        </Form>
      </Card>
      <Modal visible={visible} hide={toggleVisible}>
        <h3>
          Hi dude, I hope that you're fine!
          <Emoji emoji={'😼'} label='Cat Smiling' />
        </h3>
        <h5>
          You can access with this credentials while I doing the Sign-Up Screen
        </h5>
        <p>email: ricksanchez@yopmail.com</p>
        <p>password: 1234</p>
      </Modal>
    </React.Fragment>
  )
}

export default SignIn
