import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import SectionHeader from "../../Components/SectionHeader";
import useAuth from "../../Hooks/useAuth";
import { Wrapper } from "./Register.styles";
import useScroll from "../../Hooks/useScroll";

const Register = () => {
	const history = useHistory();
	const location = useLocation();
	const { isLoggedin, signInWithGoogle } = useAuth();

	const { from } = location.state || { from: { pathname: "/" } };

	useEffect(() => {
		isLoggedin && history.replace(from);
	}, [isLoggedin]);

	useScroll();

	return (
		<Wrapper>
			<div className='container'>
				<SectionHeader title='Please Create an Account' />
				<button onClick={signInWithGoogle}>Register with Google</button>
				<p>
					Already have an account? <Link to='/login'>Login</Link>
				</p>
			</div>
		</Wrapper>
	);
};

export default Register;
