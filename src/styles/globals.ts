import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	:root {
		--black: #000;
		--white: #fff;
		--green: #76ED44;
		--blue: #22A2BD;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%; // 15px
		}
		@media (max-width: 720) {
			font-size: 87.5%; // 14px
		}
	}

	body {
		-webkit-font-smoothing: antialiased;
		background: var(--black);
		color: var(--white);
	}

	body,
	input,
	button {
		font-family: 'Montserrat', sans-serif;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	strong {
		font-weight: 600;
	}

	button {
		cursor: pointer;
		border: none;
	}

	
`;
