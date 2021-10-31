import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// styles
import { Wrapper } from "./Navbar.styles";
// images
import { ReactComponent as Logo } from "../../Images/logo.svg";

const NavBar = () => {
	// check if user icon clicked
	const [isOpen, setIsOpen] = useState(false);
	// check if navbar is below medium
	const [isMedium, setIsMedium] = useState(false);
	const { isLoggedin, user, logout } = useAuth();

	return (
		<Wrapper>
			<div className='nav-container'>
				<div className='container d-flex justify-content-between'>
					{/* down icon  */}
					<div className='down-icon d-md-none'>
						<span onClick={() => setIsMedium((prev) => !prev)}>
							<i className='fas fa-chevron-down'></i>
						</span>
					</div>
					{/* logo */}
					<Link to='/'>
						<div className='logo'>
							<Logo />
						</div>
					</Link>
					{/* Pages */}
					<div
						className={`pages align-self-center ${isMedium ? "pages-md" : ""}`}>
						<ul className='list-unstyled d-flex flex-column flex-md-row'>
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
						<div
							className='user-icon'
							onClick={() => setIsOpen((prev) => !prev)}>
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
			</div>
		</Wrapper>
	);
};

export default NavBar;
