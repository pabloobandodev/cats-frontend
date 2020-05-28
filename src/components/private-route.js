import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../context'
import { Navbar } from './navbar'

function PrivateRoute({ component: Component, ...rest }) {
  const [id] = useAuth()
  return (
    <Route
      {...rest}
      render={(props) =>
        id ? (
          <>
            <Navbar />
            <Component {...props} />
          </>
        ) : (
          <Redirect
            to={{ pathname: '/sign-in', state: { referer: props.location } }}
          />
        )
      }
    />
  )
}

export { PrivateRoute }
