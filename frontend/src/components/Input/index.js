import React, { useState } from "react";
import { TextBox, Wrapper } from "./Input.styles";

// export function Input( { question, p } ) {
// 	const [state, setState] = useState('')
// 	console.log(state)

// 	return (
// 		<Wrapper>
// 				<div>
// 				{question}
// 				</div>
// 				<TextBox
// 					type={'text'}
// 					placeholder="Type your answer"
// 					onChange={event => setState(event.currentTarget.value)}
// 					value={state}
// 				/>
// 		</Wrapper>
// 	)
// }


export function Input( { question, value, onChange, name } ) {

	return (
		<Wrapper>
				<div>
					{question}
				</div>
				<TextBox
					name={name}
					type={'text'}
					placeholder="Type your answer"
					onChange={event => onChange(event)}
					value={value}
				/>
		</Wrapper>
	)
}
