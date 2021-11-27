import { signInWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignInForm: React.VFC = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [ps, setPs] = useState("");

	const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(() => e.target.value);
	};

	const handlePs = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPs(() => e.target.value);
	};

	const signIn = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, ps)
			.then(() => {
				console.log("sign in");
			})
			.then(() => {
				navigate("/");
			})
			.catch((e) => {
				alert(e.message);
			});
	};

	return (
		<form className="form-control" onSubmit={signIn}>
			<label className="label">
				<span className="label-text">email</span>
			</label>
			<input type="email" name="email" className="input" placeholder="email" onChange={handleEmail} />
			<label className="label">
				<span className="label-text">password</span>
			</label>
			<input type="password" name="password" className="input" placeholder="password" onChange={handlePs} />
			<div className="card-actions justify-end">
				<button className="btn btn-outline">SIGN IN</button>
				<Link to="/signup">
					<button className="btn btn-ghost">SIGN UP</button>
				</Link>
			</div>
		</form>
	);
};

export default SignInForm;
