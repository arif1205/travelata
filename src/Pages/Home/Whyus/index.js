import React from "react";
// common header
import SectionHeader from "../../../Components/SectionHeader";
// images
import { ReactComponent as Building } from "../../../Images/building.svg";
import { ReactComponent as Globe } from "../../../Images/globe.svg";
import { ReactComponent as Hammer } from "../../../Images/hammer.svg";
import { ReactComponent as Watch } from "../../../Images/watch.svg";
// styles
import { Grid, Wrapper } from "./Whyus.styles";

const Whyus = () => {
	return (
		<Wrapper>
			<div className='container'>
				<SectionHeader
					preTitle='WHY CONTACT US?'
					title='We are best in our field.'
					subTitle='You can rest assured we’ll have the capacity to make you feel comfortable as we leave the techy stuff and we focus on helping people.'
				/>
				<Grid>
					<div className='item'>
						<div className='icon'>
							<Globe />
						</div>
						<div className='content'>
							<h2>We Work Around the World</h2>
							<p>
								With over 800 locations worldwide, WeWork offers you workspace
								where and how you need it
							</p>
						</div>
					</div>
					<div className='item'>
						<div className='icon'>
							<Watch />
						</div>
						<div className='content'>
							<h2>We Move Fast and Safe</h2>
							<p>
								Speed and safety aren't always traits of manufacturing that seem
								to go together. Slowing down can increase safety
							</p>
						</div>
					</div>
					<div className='item'>
						<div className='icon'>
							<Hammer />
						</div>
						<div className='content'>
							<h2>We Do Everything Legally</h2>
							<p>
								Privacy controls How we protect your information and what you
								can do to control your Legal removals
							</p>
						</div>
					</div>
					<div className='item'>
						<div className='icon'>
							<Building />
						</div>
						<div className='content'>
							<h2>We Offer The Best Residence</h2>
							<p>
								We offer various housing options to all students who are
								interested in
							</p>
						</div>
					</div>
				</Grid>
			</div>
		</Wrapper>
	);
};

export default Whyus;
