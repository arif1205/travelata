import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 100px 0;
	background: rgba(163, 177, 138, 0.7);

	div.content {
		width: clamp(350px, 50%, 90%);
		margin: auto;
		text-align: center;

		h1 {
			font-size: 40px;
			color: var(--primary-color);
			font-weight: bold;
		}

		p {
			color: rgba(52, 78, 65, 0.7);
			font-size: 16px;
		}

		div.input {
			position: relative;
		}

		input {
			width: 100%;
			padding: 15px 20px;
			border: none;
			background: var(--primary-color);
			color: var(--secondary-color);
			border-radius: 15px;

			&::placeholder {
				color: var(--secondary-color);
			}

			&:focus {
				box-shadow: none;
				outline: none;
			}
		}

		button {
			color: var(--primary-color);
			background: rgb(163, 177, 138);
			padding: 12px 30px;
			border-radius: 25px;
			border: none;
			font-weight: bold;
			position: absolute;
			right: 10px;
			top: 50%;
			transform: translateY(-50%);
		}

		@media screen and (max-width: 575px) {
			width: clamp(250px, 95%, 95%);

			h1 {
				font-size: 30px;
			}
		}
	}
`;
