import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// images
import { ReactComponent as Logo } from "../../Images/logo.svg";
// styles
import { Wrapper } from "./Navbar.styles";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { isLoggedin, user, logout } = useAuth();

	return (
		<Wrapper>
			<div className='container d-flex justify-content-between'>
				{/* logo */}
				<div className='logo'>
					<Logo />
				</div>
				{/* Pages */}
				<div className='pages align-self-center'>
					<ul className='list-unstyled d-flex flex-row'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/services'>Services</Link>
						</li>
						<li>
							<Link to='/about'>About us</Link>
						</li>
						<li>
							<Link to='/contact'>Contact</Link>
						</li>
					</ul>
				</div>
				{/* user */}
				<div className='user-box align-self-center'>
					<div className='user-icon' onClick={() => setIsOpen((prev) => !prev)}>
						<i className='fas fa-user'></i>
					</div>
					{isOpen && (
						<div className='user-functions'>
							{isLoggedin ? (
								<ul className='list-unstyled d-flex flex-column'>
									<li className='user-name'>
										<span>{user.name}</span>
									</li>
									<li>
										<Link to='/mybooking'>My Booking</Link>
									</li>
									<li>
										<Link to='/allbooking'>Manage all Booking</Link>
									</li>
									<li>
										<Link to='/addnew'>Add a new Booking Service</Link>
									</li>
									<li>
										<button onClick={logout}>Logout</button>
									</li>
								</ul>
							) : (
								<ul className='list-unstyled d-flex flex-column'>
									<li>
										<Link to='/login'>Login</Link>
									</li>
								</ul>
							)}
						</div>
					)}
				</div>
			</div>
		</Wrapper>
	);
};

export default NavBar;
