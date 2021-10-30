import styled from "styled-components";

export const Wrapper = styled.div`
	margin-top: 86px;
	min-height: 100vh;
	padding: 100px 0;

	button {
		border: none;
		background: var(--primary-color);
		color: var(--secondary-color);
		font-weight: bold;
		padding: 13px;
		width: 250px;
		display: block;
		margin: auto;
		text-align: center;
	}

	p {
		text-align: center;
		color: #333;
		padding-top: 20px;

		a {
			color: var(--primary-color);
			font-weight: bold;
		}
	}
`;
