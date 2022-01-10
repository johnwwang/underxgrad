import React from 'react';
// Components
import { Form } from '../components/Form/index.js';
import { FormBackground } from '../components/FormBackground/index.js';


const Grad = () => {
	return(
		<>
				<div>
					<Form
						question={'How old are you?'}
					/>
					<Form
						question={'Where have you worked?'}
					/>
					<Form
						question={'What are your goals?'}
					/>
					<Form
						question={'What grad school are you looking at?'}
					/>
					<Form
						question={'What are your interests?'}
					/>
					<div style={{textAlign:'center'}} >
						<input
							type="submit" value="Submit" 
						/>
					</div>
				</div>
				<FormBackground/>
			{/* </FormBackground> */}
		</>
	);
}

export default Grad
