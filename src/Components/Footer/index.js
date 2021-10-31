import React from "react";
import { Link } from "react-router-dom";
// styled
import { Wrapper } from "./Footer.styles";

const Footer = () => {
	return (
		<Wrapper>
			<div className='container'>
				<div className='d-flex justify-content-between top-footer flex-wrap'>
					{/* nav links  */}
					<div className='links'>
						<ul className='list-unstyled d-flex flex-row'>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/about'>About</Link>
							</li>
							<li>
								<Link to='/services'>Services</Link>
							</li>
							<li>
								<Link to='/contact'>Contact</Link>
							</li>
						</ul>
					</div>
					{/* social links */}
					<div className='social'>
						<ul className='list-unstyled d-flex flex-row'>
							<li>
								<a href='#'>
									<i className='fab fa-facebook-f'></i>
								</a>
							</li>
							<li>
								<a href='#'>
									<i className='fab fa-twitter'></i>
								</a>
							</li>
							<li>
								<a href='#'>
									<i className='fab fa-linkedin'></i>
								</a>
							</li>
							<li>
								<a href='#'>
									<i className='fab fa-instagram'></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className='bottom-footer'>
					<p>© 2021 WPZORO Media | All Rights Reserved</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default Footer;
