import styled, { css } from "styled-components";

const Box = styled.div<{ hoverStyles: boolean }>`
	display: inline-block;
	border: 1px solid black;
	padding: 30px;
	border-radius: 10px;
	margin: 30px;
	text-decoration: none;
	transition: background-color 0.2s;
	color: black;

	${(props) =>
		props.hoverStyles &&
		css`
			&:hover {
				background-color: #aaa;
			}
		`};
`;

export default Box;
