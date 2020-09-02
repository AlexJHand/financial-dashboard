import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css'

import Header from './components/Header'

// const Main = () => (
// 	<main>
// 		<Switch>

// 		</Switch>
// 	</main>
// )

function App() {
	return (
		<div className="container">
			<Header />
		</div>
	)
}

export default App
