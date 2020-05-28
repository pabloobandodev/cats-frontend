import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CatProvider, AuthProvider } from './context'
import Cats from './screens/cats'
import CreateCat from './screens/create-cat'
import EditCat from './screens/edit-cat'
import MapCats from './screens/map-cats'
import SignIn from './screens/sign-in'
import SignUp from './screens/sign-up'
import { BackgroundImage, PrivateRoute } from './components'

function App() {
  return (
    <AuthProvider>
      <CatProvider>
        <Router>
          <BackgroundImage />
          <Switch>
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/sign-up' component={SignUp} />
            <PrivateRoute exact path='/cats' component={Cats} />
            <PrivateRoute exact path='/cats/:id' component={EditCat} />
            <PrivateRoute exact path='/create-cat' component={CreateCat} />
            <PrivateRoute exact path='/' component={MapCats} />
          </Switch>
        </Router>
      </CatProvider>
    </AuthProvider>
  )
}

export default App
