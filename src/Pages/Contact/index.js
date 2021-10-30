import React from "react";
import Banner from "../../Components/Banner";
import SectionHeader from "../../Components/SectionHeader";
import useScroll from "../../Hooks/useScroll";
import { Wrapper } from "./Contact.styles";

const Contact = () => {
	useScroll();

	return (
		<>
			<Banner title='Contact Us' />
			<Wrapper>
				<div className='container'>
					<SectionHeader
						title='Getting in touch is simplier than ever.'
						subTitle='Leave us your contact details and we come back with an answer.'
					/>
					<div className='row justify-content-center'>
						<div className='col-md-6'>
							<div className='row pb-3'>
								<div className='col-sm-6'>
									<label htmlFor='fname'>First Name: </label>
									<input type='text' name='fname' id='fname' />
								</div>
								<div className='col-sm-6'>
									<label htmlFor='lname'>Last Name: </label>
									<input type='text' name='lname' id='lname' />
								</div>
							</div>
							<div className='row  pb-3'>
								<div className='col'>
									<label htmlFor='email'>Email: </label>
									<input type='email' name='email' id='email' />
								</div>
							</div>
							<div className='row  pb-3'>
								<div className='col'>
									<label htmlFor='message'>Message: </label>
									<textarea
										name='message'
										id='message'
										cols='30'
										rows='5'></textarea>
								</div>
							</div>
							<div className='row'>
								<div className='col'>
									<button>Send Message</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default Contact;
