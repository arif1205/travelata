import React, { useEffect, useState } from "react";
// components
import SectionHeader from "../../../Components/SectionHeader";
// styled
import { Grid, Wrapper } from "./Offers.styles";

const Offers = () => {
	const [offers, setOffer] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then((res) => res.json())
			.then((data) => setOffer(data.slice(0, 6)));
	}, []);

	return (
		<Wrapper>
			<div className='container'>
				<SectionHeader
					preTitle='DON’T MISS'
					title='Special offers.'
					subTitle='The world is a book and those who do not travel read only one page. Travel is the only thing you buy that makes you richer.'
				/>
				{/* services */}
				<Grid>
					{offers.map((offer) => (
						<div className='item' key={offer.id}>
							<div className='img'>
								<img src={offer.img} alt='Travel' />
							</div>
							<div className='content'>
								<h1>{offer.place}</h1>
								<hr />
								<div className='d-flex justify-content-between flex-wrap content-bottom'>
									<button>Book Now</button>
									<div className='price align-self-center'>
										<span>From</span>
										<span>${offer.price}</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</Grid>
			</div>
		</Wrapper>
	);
};

export default Offers;