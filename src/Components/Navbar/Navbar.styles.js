import styled from "styled-components";

export const Wrapper = styled.nav`
	background-color: var(--primary-color);
	padding: 15px 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999;

	.nav-container {
		position: relative;

		.down-icon {
			position: absolute;
			right: 20px;
			bottom: -30px;
			color: var(--secondary-color);

			span {
				display: inline-block;
				width: 40px;
				height: 40px;
				background: var(--primary-color);
				text-align: center;
				line-height: 40px;
				border-radius: 50%;
				cursor: pointer;
			}
		}
	}

	svg {
		fill: var(--secondary-color);
		width: 200px;
	}

	ul {
		gap: 20px;

		a {
			color: var(--secondary-color);
			font-size: 18px;
			font-weight: 500;

			&:hover {
				color: #fff;
			}
		}
	}

	.user-box {
		position: relative;

		i {
			color: var(--secondary-color);
			font-size: 20px;
			display: inline-block;
			cursor: pointer;
			height: 40px;
			width: 40px;
			line-height: 40px;
			text-align: center;
			border: 1px solid var(--secondary-color);
			border-radius: 50%;
		}

		.user-name {
			font-weight: bold;
			color: var(--primary-color);
		}

		button {
			border: none;
			padding: 10px 15px;
			background: var(--primary-color);
			color: var(--secondary-color);
		}

		.user-functions {
			position: absolute;
			z-index: 9999;
			right: 0;
			top: 100%;
			margin-top: 16px;
			border-radius: 5px;
			width: max-content;
			text-align: right;
			padding: 20px;
			background: #fff;
			box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
				rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
				rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
				rgba(0, 0, 0, 0.07) 0px 32px 64px;

			ul {
				gap: 0;
			}

			a {
				color: #333;
				font-size: 14px;
				display: block;
				padding: 8px;

				&:hover {
					color: var(--secondary-color);
					background: var(--primary-color);
				}
			}
		}
	}

	@media screen and (max-width: 767px) {
		.user-box {
			order: 2;
		}

		.pages {
			order: 3;
			position: absolute;
			background: var(--primary-color);
			left: 0;
			top: -400%;
			width: 250px;
			text-align: center;
			transition: 0.3s;
		}

		.pages-md {
			top: 130%;
		}
	}
`;
