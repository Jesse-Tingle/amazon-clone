import React, {useEffect} from 'react'
import "./App.css"
import Header from "./components/Header"
import Login from './components/userAuth/Login'
import Home from "./components/Home"
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {auth} from './firebase.js'
import { useStateValue } from './context/StateProvider'

function App() {
	const [{}, dispatch] = useStateValue()

	useEffect(() => {
		// will only run once when the app component loads...
	
		auth.onAuthStateChanged((authUser) => {
		  console.log("THE USER IS >>> ", authUser);
	
		  if (authUser) {
			// the user just logged in / the user was logged in
	
			dispatch({
			  type: "SET_USER",
			  user: authUser,
			});
		  } else {
			// the user is logged out
			dispatch({
			  type: "SET_USER",
			  user: null,
			});
		  }
		});
	  }, []);

	return (
		<Router>
			<div className="app">
				<Header />
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path='/checkout'>
						<Checkout />
					</Route>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
