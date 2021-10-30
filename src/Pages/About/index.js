import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import SectionHeader from "../../Components/SectionHeader";
import useScroll from "../../Hooks/useScroll";
import ourStory from "../../Images/our-story.jpg";
import { Grid, Wrapper } from "./About.styles";

const About = () => {
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/teams")
			.then((res) => res.json())
			.then((data) => setTeams(data));
	}, []);

	useScroll();

	return (
		<>
			<Banner
				title='Learn more about the company.'
				subTitle='Contact us for more details.'
			/>
			<Wrapper>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6 align-self-center px-5'>
							<h1>Our Story</h1>
							<p>
								Every Inspirato Pass trip includes first-class personalized
								service, with pre-trip planning, on-site concierge, and daily
								housekeeping. Your dedicated Care team will help you choose your
								trips, connect you to local experts, let you know about new
								properties and destinations
							</p>
							<p>
								Inspirato Pass requires no long-term commitment. You may cancel
								your subscription at any time. Please note your subscription
								must be active to both reserve and travel with your Pass.
							</p>
						</div>
						<div className='col-md-6 align-self-center px-5'>
							<img src={ourStory} alt='' className='img-fluid' />
						</div>
					</div>
				</div>
			</Wrapper>
			<Wrapper>
				<div className='container'>
					<SectionHeader
						preTitle='OUR TEAM'
						title='Meet the Team.'
						subTitle='Regardless of your situation, we can help you exit your comfort zone, like we’ve done for other people. Hear what some of them have to say:'
					/>
					<Grid>
						{teams.map((member) => (
							<div className='member' key={member._id}>
								<div className='profile'>
									<img src={member.img} alt='Profile' className='img-fluid' />
								</div>
								<div className='content'>
									<h1>{member.name}</h1>
									<p>{member.role}</p>
									<div className='social'>
										<ul className='list-unstyled d-flex justify-content-center'>
											<li>
												<a href='#'>
													<i className='fab fa-facebook-f'></i>
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fab fa-instagram'></i>
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fab fa-twitter'></i>
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fab fa-youtube'></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						))}
					</Grid>
				</div>
			</Wrapper>
		</>
	);
};

export default About;
