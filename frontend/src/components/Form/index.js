import React, { useState } from "react";
import { Input, Wrapper } from "../Form/Form.styles";

export function Form( { question } ) {
	const [state, setState] = useState('')
	console.log(state)

	return (
		<Wrapper>
				<div>
				{question}
				</div>
				<Input
					type={'text'}
					placeholder="Type your answer"
					onChange={event => setState(event.currentTarget.value)}
					value={state}
				/>
		</Wrapper>
	)
}
