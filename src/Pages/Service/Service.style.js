import styled from "styled-components";

export const Wrapper = styled.div`
	margin-top: 86px;
	min-height: 100vh;
	padding: 100px 0;
	/* background: var(--secondary-color); */

	.order-review {
		label {
			display: block;
			padding: 0 0 5px 10px;
			color: var(--primary-color);
			font-weight: bold;
		}

		input {
			display: block;
			width: 100%;
			border: none;
			padding: 12px 20px;
			border-radius: 15px;
			background: var(--primary-color);
			color: var(--secondary-color);
			margin-bottom: 15px;
		}

		button {
			display: block;
			border: none;
			padding: 12px 20px;
			border-radius: 15px;
			background: var(--primary-color);
			color: var(--secondary-color);
			font-weight: bold;
		}
	}

	.order-details {
		background: var(--primary-color);
		color: var(--secondary-color);
		padding: 30px;
		border-radius: 15px;

		p {
			color: #fff;
			font-weight: bold;
			font-size: 18px;
		}

		span {
			font-size: 16px;
		}
	}
`;
