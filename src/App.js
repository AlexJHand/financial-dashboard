import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './components/HomePage'

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={HomePage} />
		</Switch>
	</main>
)

function App() {
	return (
		<div className="container">
			<Header />
			<div className="mainWindow">
				<Main />
			</div>
			<Footer />
		</div>
	)
}

export default App
