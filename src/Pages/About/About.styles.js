import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 100px 0;

	img {
		border-radius: 10px;
	}

	h1 {
		color: var(--primary-color);
	}

	p {
		color: #333;
		line-height: 1.5;
		font-size: 17px;
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 50px 30px;

	div.member {
		padding: 50px 0;
		border-radius: 10px;
		text-align: center;
		transition: all 0.3s;

		img {
			width: 150px;
			height: 150px;
			border-radius: 50%;
			text-align: center;
			margin: auto;
			margin-bottom: 20px;
		}
		h1 {
			font-size: 22px;
			font-weight: bold;
		}

		p {
			font-size: 16px;
			color: #777;
		}

		div.social {
			padding-top: 20px;
			display: none;

			ul {
				gap: 15px;

				a {
					color: #333;
					font-size: 18px;
				}
			}
		}

		&:hover {
			box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
				rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
		}

		&:hover div.social {
			display: block;
		}
	}
`;
