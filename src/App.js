import React from "react";
// Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Context
import AuthProvider from "./Context/AuthProvider";
// Components
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";
// pages
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Services from "./Pages/Services";
import Service from "./Pages/Service";
import MyBooking from "./Pages/MyBooking";
import AllBooking from "./Pages/AllBooking";
import AddNew from "./Pages/AddNew";
import NotFound from "./Pages/NotFound";

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
					<PrivateRoute exact path='/services/:id'>
						<Service />
					</PrivateRoute>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/register'>
						<Register />
					</Route>
					<PrivateRoute exact path='/mybooking'>
						<MyBooking />
					</PrivateRoute>
					<PrivateRoute exact path='/allbooking'>
						<AllBooking />
					</PrivateRoute>
					<PrivateRoute exact path='/addnew'>
						<AddNew />
					</PrivateRoute>
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</AuthProvider>
	);
}

export default App;
