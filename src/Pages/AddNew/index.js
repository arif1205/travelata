import React, { useRef } from "react";
import { Wrapper } from "./AddNew.styles";
import SectionHeader from "../../Components/SectionHeader";
import { useHistory } from "react-router";

const AddNew = () => {
	const placeRef = useRef();
	const priceRef = useRef();
	const maxPeopleRef = useRef();
	const minPeopleRef = useRef();
	const detailsRef = useRef();
	const durationRef = useRef();
	const imgRef = useRef();
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();

		const newService = {
			place: placeRef.current.value,
			price: priceRef.current.value,
			maxPeople: maxPeopleRef.current.value,
			minPeople: minPeopleRef.current.value,
			details: detailsRef.current.value,
			duration: durationRef.current.value,
			img: imgRef.current.value,
		};

		fetch("https://dreadful-asylum-85968.herokuapp.com/services", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(newService),
		}).then((res) => {
			if (res.status === 200) {
				alert("Added new Service successfully!");
				history.push("/");
			}
		});
	};

	return (
		<>
			<Wrapper>
				<div className='container'>
					<SectionHeader
						title='Add a new Service'
						subTitle='Please enter details of service'
					/>
					<div className='row justify-content-center'>
						<div className='get-data col-sm-6 col-md-4'>
							<form onSubmit={handleSubmit}>
								<div class='form-group mb-3'>
									<label for='place'>Place</label>
									<input
										type='text'
										class='form-control'
										name='place'
										ref={placeRef}
									/>
								</div>
								<div class='form-group mb-3'>
									<label for='price'>Price</label>
									<input
										type='text'
										class='form-control'
										name='price'
										ref={priceRef}
									/>
								</div>

								<div class='form-group mb-3'>
									<label for='Details'>Details</label>
									<input
										type='text'
										class='form-control'
										name='details'
										ref={detailsRef}
									/>
								</div>

								<div class='form-group mb-3'>
									<label for='max-people'>Max People</label>
									<input
										type='text'
										class='form-control'
										id='max-people'
										ref={maxPeopleRef}
									/>
								</div>
								<div class='form-group mb-3'>
									<label for='min-age'>Min Age</label>
									<input
										id='min-age'
										class='form-control'
										type='text'
										ref={minPeopleRef}
									/>
								</div>
								<div class='form-group mb-3'>
									<label for='duration'>Duration</label>
									<input
										type='text'
										class='form-control'
										name='duration'
										ref={durationRef}
									/>
								</div>
								<div class='form-group mb-3'>
									<label for='img'>Image URL</label>
									<input
										type='text'
										class='form-control'
										name='img'
										ref={imgRef}
									/>
								</div>

								<button type='submit' class='btn btn-primary'>
									Add
								</button>
							</form>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default AddNew;
