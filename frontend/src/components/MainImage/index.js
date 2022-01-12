import React from 'react';
import { Link } from 'react-router-dom'
// Styles
import { Wrapper, Content, Text, PersonTypeButton } from './MainImage.styles';

const MainImage = ({ image, callback }) => (
	<Wrapper image={image}>
		<Content>
			<Text>
				{'Who are you?'}
			</Text>
			<Link to={'/undergrad'}>
				<PersonTypeButton
					name='undergrad'
					position='left'
				>
					Undergraduate
				</PersonTypeButton>
			</Link>
			<Link to={'/grad'}>
				<PersonTypeButton
					name='grad'
					position='right'
				>
					Graduate
				</PersonTypeButton>
			</Link>
		</Content>
	</Wrapper>
)

export default MainImage;