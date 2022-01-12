import React, { useState } from 'react';
// Components
import { Input } from '../components/Input/index.js';
import { FormBackground } from '../components/FormBackground/index.js';


function Grad() {

	const [state, setState] = useState({})
	const [loading, setLoading] = useState(true)

	const handleInputChange = (event) => {
		const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
		const new_state = state
		new_state[name] = value
		setState(new_state)
		console.log(state)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		setLoading(true);
    fetch('http://localhost:3001/add-data', {
			method: 'POST',
			// mode: 'no-cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(state)})
			.then(response => {
				console.log('response ok: ' + response.ok)
				return response
			})
  }

	const getData = () => {
		fetch('http://localhost:3001/get-data/', {method: 'GET'})
	}

	return(
		<>
			<form onSubmit={ handleSubmit }>
				<div>
						<Input
							name='age'
							question='How old are you?'
							onChange={handleInputChange}
						/>
						<Input
							name='companies'
							question='Where have you worked?'
							onChange={handleInputChange}
						/>
						<Input
							name='goals'
							question='What are your goals?'
							onChange={handleInputChange}
						/>
						<Input
							name='school'
							question='What grad school are you in?'
							onChange={handleInputChange}
						/>
						<Input
							name='interests'
							question='What are your interests?'
							onChange={handleInputChange}
						/>
						<div style={{textAlign:'center'}}>
							<button
								type="submit" 
								value="Submit" 
							>
								Submit
							</button>
						</div>
					</div>
				</form>
				<FormBackground/>
		</>
	);
}

export default Grad
