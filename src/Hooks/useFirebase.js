import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/firebase.init";
import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";

initializeAuth();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoggedin, setIsLoggedin] = useState(false);
	const [error, setError] = useState("");

	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (result) => {
			if (result) {
				const uid = result.uid;
				setUser({ name: result.displayName, id: uid, email: result.email });
				setIsLoggedin(true);
			} else {
				setUser({});
				setIsLoggedin(false);
			}
		});
	}, []);

	const signInWithGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				setUser({ name: user.displayName, id: user.uid, email: user.email });
				setIsLoggedin(true);
				setError("");
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
				setUser({});
				setIsLoggedin(false);
			});
	};

	const logout = () => {
		signOut(auth).then(() => {
			setUser({});
			setIsLoggedin(false);
		});
	};

	return {
		user,
		error,
		isLoggedin,
		signInWithGoogle,
		logout,
	};
};

export default useFirebase;
