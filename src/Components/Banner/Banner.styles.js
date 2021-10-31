import styled from "styled-components";

export const Wrapper = styled.div`
	min-height: 100vh;
	margin-top: 86px;
	background: url(${(props) => props.bg});
	background-size: cover;
	background-attachment: fixed;
	display: flex;
	justify-content: center;
	align-items: center;

	div.banner-content {
		width: clamp(350px, 60%, 800px);
		text-align: center;

		h1 {
			color: var(--primary-color);
			font-weight: 500;
			margin-bottom: 16px;

			@media screen and (max-width: 575px) {
				font-size: 28px;
			}
		}

		p {
			font-size: 20px;
			color: rgba(52, 78, 65, 0.75);

			@media screen and (max-width: 575px) {
				font-size: 19px;
			}
		}
	}
`;
