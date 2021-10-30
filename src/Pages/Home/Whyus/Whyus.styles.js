import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 100px 0;
	background: #fff;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);

	div.item {
		text-align: center;
		padding: 0 20px;

		div.icon {
			height: 130px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		h2 {
			font-size: 22px;
			color: var(--primary-color);
		}

		p {
			color: rgba(52, 78, 65, 0.75);
			font-size: 16px;
		}
	}
`;
