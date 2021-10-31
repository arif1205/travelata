import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
// styles
import { Wrapper } from "./Service.style";
// component
import SectionHeader from "../../Components/SectionHeader";
// hooks
import useScroll from "../../Hooks/useScroll";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Components/Loading";

const Service = () => {
	const [details, setDetails] = useState({});
	const [loading, setLoading] = useState(false);
	const { user } = useAuth();
	const history = useHistory();
	const { id } = useParams();

	useEffect(() => {
		setLoading(true);
		fetch("https://dreadful-asylum-85968.herokuapp.com/services")
			.then((res) => res.json())
			.then((data) => {
				setDetails(data.find((item) => item.id === id));
				setLoading(false);
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const order = {};
		order.product_id = id;
		order.name = user.name;
		order.email = user.email;
		order.status = false;

		// Post to add in order
		fetch("https://dreadful-asylum-85968.herokuapp.com/orders", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(order),
		}).then((res) => {
			if (res.status === 200) {
				alert("Booking placed successfully!");
				history.push("/");
			}
		});
	};

	useScroll();

	return (
		<Wrapper>
			<div className='container'>
				{loading ? (
					<Loading />
				) : (
					<SectionHeader title={details?.place} subTitle={details?.details} />
				)}
				<div className='orders row justify-content-between'>
					<div className='col-md-4 mb-5 mb-md-0'>
						<div className='order-review'>
							<form onSubmit={handleSubmit}>
								<label htmlFor='name'>Name: </label>
								<input type='text' name='name' value={user.name} readOnly />
								<label htmlFor='email'>Email: </label>
								<input type='email' name='emal' value={user.email} readOnly />
								<label htmlFor='address'>Address: </label>
								<input type='text' name='address' required />
								<label htmlFor='city'>City: </label>
								<input type='text' name='city' required />
								<button type='submit'>Place order</button>
							</form>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='order-details'>
							<div className='row pb-3'>
								<div className='col-md-6'>
									<span>Price</span>
									<p>From ${details?.price}</p>
								</div>
								<div className='col-md-6'>
									<span>Duration</span>
									<p>{details?.duration} Days</p>
								</div>
							</div>
							<div className='row'>
								<div className='col-md-6'>
									<span>Max People</span>
									<p>{details?.maxPeople}</p>
								</div>
								<div className='col-md-6'>
									<span>Min Age</span>
									<p>+{details?.minAge}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Service;
