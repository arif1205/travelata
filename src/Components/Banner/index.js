import React from "react";
// styles
import { Wrapper } from "./Banner.styles";
// images
import bg from "../../Images/banner.jpg";

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
