import React from "react";
// styles
import { Wrapper } from "./SectionHeader.styles";

const SectionHeader = ({ preTitle, title, subTitle }) => {
	return (
		<Wrapper>
			<h4>{preTitle}</h4>
			<h1>{title}</h1>
			<p>{subTitle}</p>
		</Wrapper>
	);
};

export default SectionHeader;
