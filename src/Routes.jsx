/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-23 06:33:40
 */

import React from 'react'
import { Route, Switch } from 'react-router'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Login from './components/Login'

const Routes = _ => (
    <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route exact path='/login'>
            <Login />
        </Route>

        <Route>
            <NotFound />
        </Route>
    </Switch>
)

export default Routes
