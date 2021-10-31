import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../../Components/SectionHeader";
import { Wrapper } from "./NotFound.styles";

const NotFound = () => {
	return (
		<Wrapper>
			<div className='container'>
				<SectionHeader title='Page Not Found' />
				<Link to='/'>Back to Home</Link>
			</div>
		</Wrapper>
	);
};

export default NotFound;
