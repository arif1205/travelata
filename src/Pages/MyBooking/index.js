import React, { useState, useEffect } from "react";
import { Wrapper } from "./MyBooking.styles";
import SectionHeader from "../../Components/SectionHeader";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Components/Loading";

const MyBooking = () => {
	const [myorders, setMyorders] = useState([]);
	const [loading, setLoading] = useState(false);
	const { user } = useAuth();

	useEffect(() => {
		setLoading(true);
		fetch("https://dreadful-asylum-85968.herokuapp.com/orders")
			.then((res) => res.json())
			.then((data) => {
				Array.isArray(data)
					? setMyorders(data.filter((v) => v.email === user.email))
					: setMyorders([data]);
				setLoading(false);
			});
	}, []);

	const handleDelete = (id) => {
		const shouldDelete = window.confirm("Are you sure want to delete?");
		if (shouldDelete) {
			fetch(`https://dreadful-asylum-85968.herokuapp.com/orders/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount) {
						alert("Deleted Successfully!");
						const remaining = myorders.filter((order) => order._id !== id);
						setMyorders(remaining);
					}
				});
		}
	};

	return (
		<Wrapper>
			<div className='container'>
				<SectionHeader title='All my Orders' />
				<table className='table table-striped'>
					<thead>
						<tr>
							<th scope='col'>Booking ID</th>
							<th scope='col'>Name</th>
							<th scope='col'>Delete?</th>
						</tr>
					</thead>
					<tbody>
						{loading ? (
							<Loading />
						) : (
							myorders.map((order) => (
								<tr key={order._id}>
									<td className='font-weight-bold'>{order.product_id}</td>
									<td>{order.name}</td>
									<td>
										<button
											className='btn btn-danger'
											onClick={(e) => handleDelete(order._id)}>
											Delete
										</button>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</Wrapper>
	);
};

export default MyBooking;
