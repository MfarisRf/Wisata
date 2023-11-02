import React from 'react'
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom"
import { About, Dasboard, Home, Login} from '../../pages'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route>
          <About />
        </Route>
        <Route>
          <Dasboard />
        </Route>
        <Route>
          <Home />
        </Route>
        <Route>
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}


export default Routes