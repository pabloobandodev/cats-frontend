import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context'
import { Button } from './styles'

const Ul = styled.ul`
  list-style-type: none;
  overflow: hidden;
`

const Li = styled.li`
  float: right;
`

const Option = styled(NavLink)`
  display: block;
  padding: 8px;
  margin: 6px;
  text-decoration: none;
  color: #303030;
  font-size: 20px;
  &.active {
    border-bottom: 3px solid #8f91a3;
  }
`

function Navbar() {
  const [, setIdAuth] = useAuth()
  const logout = () => setIdAuth(null)
  return (
    <nav>
      <Ul>
        <Li>
          <Button
            style={{
              border: 0,
              backgroundColor: '#fff',
              color: '#303030',
              fontSize: '20px',
            }}
            onClick={logout}
          >
            Logout
          </Button>
        </Li>
        <Li>
          <Option to='/cats'>Cats</Option>
        </Li>
        <Li>
          <Option to='/create-cat' exact={true}>
            Create
          </Option>
        </Li>
        <Li>
          <Option to='/' exact={true}>
            Map
          </Option>
        </Li>
      </Ul>
    </nav>
  )
}

export { Navbar }
