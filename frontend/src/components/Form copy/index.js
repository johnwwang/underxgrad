import React from "react";
import { Input, Wrapper } from "../Input/Input.styles";

export function Form( { question }) {
	return (
		<Wrapper>
				<div>
				{question}
				</div>
				<Input
					value={'Text'}
				/>
		</Wrapper>
	)
}
