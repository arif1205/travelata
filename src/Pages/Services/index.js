import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../Components/Banner";
import useScroll from "../../Hooks/useScroll";
import { Grid, Wrapper } from "./Services.styles";

const Services = () => {
	const [offers, setOffer] = useState([]);

	useEffect(() => {
		fetch("https://dreadful-asylum-85968.herokuapp.com/services")
			.then((res) => res.json())
			.then((data) => setOffer(data));
	}, []);

	useScroll();

	return (
		<div>
			<Banner
				title='Search offers and find best for you'
				subTitle='Search offers and find best for you'
			/>
			<Wrapper>
				<div className='container'>
					{/* service top  */}
					<div className='top-services'>
						<div className='tours'>
							<span>{offers.length} Tours</span>
						</div>
					</div>
					<Grid>
						{offers.map((offer) => (
							<div className='item' key={offer.id}>
								<div className='img'>
									<img src={offer.img} alt='Travel' />
								</div>
								<div className='content'>
									<h1>{offer.place}</h1>
									<hr />
									<div className='des'>{offer.details}</div>
									<div className='d-flex justify-content-between flex-wrap content-bottom'>
										<Link to={`/services/${offer.id}`}>
											<button>Book Now</button>
										</Link>
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
		</div>
	);
};

export default Services;
