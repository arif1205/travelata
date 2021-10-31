import styled from "styled-components";

export const Wrapper = styled.div`
	text-align: center;
	padding: 0 20px;
	width: clamp(350px, 60%, 800px);
	margin: auto;
	padding-bottom: 80px;

	h4 {
		font-weight: 400;
		font-size: 19px;
		color: var(--primary-color);
		margin-bottom: 15px;
	}

	h1 {
		font-weight: 500;
		font-size: 45px;
		color: var(--primary-color);
		margin-bottom: 20px;
	}

	p {
		color: rgba(52, 78, 65, 0.75);
		font-size: 16px;
	}

	@media screen and (max-width: 767px) {
		width: clamp(350px, 100%, 800px);
	}

	@media screen and (max-width: 375px) {
		width: clamp(250px, 100%, 800px);
	}
`;
