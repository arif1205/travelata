import React from "react";
// styles
import { Wrapper } from "./Mail.styles";

const Mail = () => {
	return (
		<Wrapper>
			<div className='container'>
				<div className='content'>
					<h1>Getting in touch is simpler than ever</h1>
					<p>Leave us your email address and we contact you back</p>
					<div className='input'>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Enter your email address'
							required
						/>
						<button>Submit</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Mail;
