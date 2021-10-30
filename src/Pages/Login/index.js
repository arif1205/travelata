import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import SectionHeader from "../../Components/SectionHeader";
import useAuth from "../../Hooks/useAuth";
import { Wrapper } from "./Login.styles";
import useScroll from "../../Hooks/useScroll";

const Login = () => {
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
				<SectionHeader title='Please Log in' />
				<button onClick={signInWithGoogle}>Login with Google</button>
				<p>
					Don't have an account? <Link to='/register'>Register</Link>
				</p>
			</div>
		</Wrapper>
	);
};

export default Login;
