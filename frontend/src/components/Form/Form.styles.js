import styled from "styled-components";

export const Wrapper = styled.div`
	background: tan;
	opacity: 70%;
	z-index: 100;
	height: 120px;
	text-align: center;
	padding: 5px;

`

export const Input = styled.input`
  margin: 0.5em;
  color: black;
  background: bisque;
  border: none;
  border-radius: 3px;
	cursor: default;
	height: 50px;
	@media screen and (min-width: 1000px) {
      width: 700px;
	}
	@media screen and (min-width: 720px) and (max-width: 1000px) {
      width: 500px;
	}
	@media screen and (min-width: 400px) and (max-width: 720px) {
      width: 300px;
	}
`;
