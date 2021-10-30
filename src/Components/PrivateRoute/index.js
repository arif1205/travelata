import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
	const { isLoggedin } = useAuth();

	return (
		<Route
			{...rest}
			render={({ location }) =>
				isLoggedin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
