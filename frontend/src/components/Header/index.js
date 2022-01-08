import React from 'react';
import { Link } from 'react-router-dom'

import SquareLogo from '../../images/square.svg';
import LightbulbLogo from '../../images/lightbulb.svg';

import { Wrapper, Content, SquareLogoImg, Title, LightbulbLogoImg } from './Header.styles';


const Header = () => (
	<Wrapper>
		<Content>
			<Link to={'/'}>
				<SquareLogoImg src={SquareLogo} alt='square-logo'/>
			</Link>
			<Title alt='title'>Under X Grad</Title>
			<LightbulbLogoImg src={LightbulbLogo} alt='lightbulb-logo' />
		</Content>
	</Wrapper>
);

export default Header;