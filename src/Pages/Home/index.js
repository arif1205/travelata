import React from "react";
// Components
import Banner from "../../Components/Banner";
import useScroll from "../../Hooks/useScroll";
import Mail from "./Mail";
import Offers from "./Offers";
import Whyus from "./Whyus";

const Home = () => {
	useScroll();

	return (
		<div>
			<Banner
				title='Feel free to discover most engaging places.'
				subTitle='Best places for your next travel are here check them out'
			/>
			<Whyus />
			<Offers />
			<Mail />
		</div>
	);
};

export default Home;
