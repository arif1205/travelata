import React, { useState, useEffect } from "react";
import { Wrapper } from "../MyBooking/MyBooking.styles";
import SectionHeader from "../../Components/SectionHeader";
import useAuth from "../../Hooks/useAuth";

const AllBooking = () => {
	const [allorders, setAllorders] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/orders")
			.then((res) => res.json())
			.then((data) =>
				Array.isArray(data) ? setAllorders(data) : setAllorders([data])
			);
	}, []);

	const handleDelete = (id) => {
		const shouldDelete = window.confirm("Are you sure want to delete?");
		if (shouldDelete) {
			fetch(`http://localhost:5000/orders/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount) {
						alert("Deleted Successfully!");
						const remaining = allorders.filter((order) => order._id !== id);
						setAllorders(remaining);
					}
				});
		}
	};

	const handleApprove = (id) => {
		const updatedBook = allorders.find((order) => order._id === id);
		updatedBook.status = true;

		fetch(`http://localhost:5000/orders/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedBook),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.modifiedCount) {
					setAllorders(
						allorders.map((order) => {
							if (order._id === id) order.status = true;
							return order;
						})
					);
					alert("Booking approved");
				}
			});
	};

	return (
		<Wrapper>
			<div className='container'>
				<SectionHeader title='Manage All Orders' />
				<table className='table table-striped'>
					<thead>
						<tr>
							<th scope='col'>Booking ID</th>
							<th scope='col'>Name</th>
							<th scope='col'>Status</th>
							<th scope='col'>Action</th>
							<th scope='col'>Delete?</th>
						</tr>
					</thead>
					<tbody>
						{allorders.map((order) => (
							<tr key={order._id}>
								<td className='font-weight-bold'>{order.product_id}</td>
								<td>{order.name}</td>
								<td>
									{order.status ? (
										<span className='text-success'>Approved</span>
									) : (
										<span className='text-info'>Pending</span>
									)}
								</td>
								<td>
									<button
										className='btn btn-warning'
										onClick={(e) => handleApprove(order._id)}>
										Approve
									</button>
								</td>
								<td>
									<button
										className='btn btn-danger'
										onClick={(e) => handleDelete(order._id)}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Wrapper>
	);
};

export default AllBooking;
