import React from "react";
// images
import bg from "../../Images/banner.jpg";
// styles
import { Wrapper } from "./Banner.styles";

const Banner = ({ title, subTitle }) => {
	return (
		<Wrapper bg={bg}>
			<div className='banner-content'>
				<h1 className='display-3'>{title}</h1>
				<p>{subTitle}</p>
			</div>
		</Wrapper>
	);
};

export default Banner;
