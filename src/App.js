/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-22 22:00:57
 */

import React from 'react'

import './App.css'

import NavigationBar from './components/NavigationBar'
import Routes from './Routes'

function App() {
    return (
        <div>
            <NavigationBar />
            <div>
                <Routes />
            </div>
        </div>
    );
}

export default App;
