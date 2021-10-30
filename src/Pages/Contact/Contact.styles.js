import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 100px 0;

	input {
		border: none;
		background: var(--primary-color);
		color: var(--secondary-color);
		border-radius: 15px;
		width: 100%;
		padding: 10px 20px;
	}

	label {
		display: block;
		color: var(--primary-color);
		font-weight: bold;
		margin-bottom: 10px;
	}

	textarea {
		border: none;
		background: var(--primary-color);
		color: var(--secondary-color);
		border-radius: 15px;
		width: 100%;
		padding: 10px 20px;
	}

	button {
		background: rgb(163, 177, 138);
		color: var(--primary-color);
		padding: 12px 30px;
		border-radius: 20px;
		font-weight: bold;
		border: none;
	}
`;
