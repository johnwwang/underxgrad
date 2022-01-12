import React from 'react';
// Components
import MainImage from '../components/MainImage'
import AboutUs from '../components/AboutUs';
// Image
import HomeImg from '../images/home_img.jpg';

const Home = () => {

	return(
		<>
			<MainImage image={HomeImg}/>
			<AboutUs />
		</>
	);

}

export default Home
