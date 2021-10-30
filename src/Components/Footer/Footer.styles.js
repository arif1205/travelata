import styled from "styled-components";

export const Wrapper = styled.footer`
	background: var(--secondary-color);
	padding: 100px 0 40px;

	.top-footer {
		padding-bottom: 30px;
	}

	ul {
		gap: 20px;

		a {
			color: var(--primary-color);
			font-size: 18px;
			font-weight: 500;

			&:hover {
				opacity: 0.8;
			}
		}
	}

	.bottom-footer {
		padding: 20px;
		color: #000;
		text-align: center;

		p {
			margin-bottom: 0;
		}
	}
`;
