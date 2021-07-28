/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-23 06:33:40
 */

import React from 'react'
import { Route, Switch } from 'react-router'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Login from './components/Login'
import HomeInternal from './components/HomeApp'
import PrivateRoute from './components/PrivateRoute'
import UserPage from './components/UserPage'

const Routes = _ => (
    <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route exact path='/login'>
            <Login />
        </Route>
        <PrivateRoute exact path='/internal/home'>
            <HomeInternal />
        </PrivateRoute>
        <PrivateRoute exact path='/internal/user'>
            <UserPage />
        </PrivateRoute>

        <Route>
            <NotFound />
        </Route>
    </Switch>
)

export default Routes
