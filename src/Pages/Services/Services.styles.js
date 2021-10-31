import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 100px 0;

	.top-services {
		span {
			color: var(--primary-color);
			font-weight: bold;
		}
		padding-bottom: 20px;
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 40px;

	div.item {
		position: relative;
		border-radius: 15px;
		overflow: hidden;

		img {
			width: 100%;
			height: 500px;
			object-fit: cover;
		}

		div.content {
			position: absolute;
			left: 0;
			bottom: 0;
			background: var(--secondary-color);
			width: 100%;
			border-radius: 15px;
			padding: 30px 20px;

			.des {
				color: #333;
				font-size: 16px;
				padding: 12px 0;
				display: none;
			}

			h1 {
				color: var(--primary-color);
				font-size: 28px;
			}

			hr {
				color: var(--primary-color);
			}

			.content-bottom {
				padding: 10px 0;

				button {
					border: none;
					padding: 10px 30px;
					border-radius: 30px;
					background: var(--primary-color);
					color: var(--secondary-color);
					cursor: pointer;
				}

				div.price {
					span {
						display: block;
						color: var(--primary-color);
						font-weight: bold;
					}
				}
			}
		}

		&:hover div.content .des {
			display: block;
		}
	}

	@media screen and (max-width: 767px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 575px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
