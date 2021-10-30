import React from "react";
// Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
// Components
import NavBar from "./Components/Navbar";
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
// pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Services from "./Pages/Services";

function App() {
	return (
		<AuthProvider>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/contact'>
						<Contact />
					</Route>
					<Route exact path='/about'>
						<About />
					</Route>
					<Route exact path='/services'>
						<Services />
					</Route>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/register'>
						<Register />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</AuthProvider>
	);
}

export default App;
