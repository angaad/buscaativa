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
import Kids from './components/Kids'
import RacePage from './components/RacePage'
import LegalStatusPage from './components/LegalStatusPage'
import HealthPage from './components/HealthPage'

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
		<PrivateRoute exact path='/internal/races'>
			<RacePage />
		</PrivateRoute>
		<PrivateRoute exact path='/internal/legalstatus'>
			<LegalStatusPage />
		</PrivateRoute>
		<PrivateRoute exact path='/internal/health'>
			<HealthPage />
		</PrivateRoute>
		<PrivateRoute exact path='/internal/kids'>
			<Kids />
		</PrivateRoute>

        <Route>
            <NotFound />
        </Route>
    </Switch>
)

export default Routes
