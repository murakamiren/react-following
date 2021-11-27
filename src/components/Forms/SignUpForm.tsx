import { createUserWithEmailAndPassword } from "@firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../../firebase";

const SignUpForm: React.VFC = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [ps, setPs] = useState("");
	const [username, setUsername] = useState("");

	const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(() => e.target.value);
	};

	const handlePs = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPs(() => e.target.value);
	};

	const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(() => e.target.value);
	};

	const createAccount = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, ps)
			.then((d) => {
				console.log("success");
				return d.user;
			})
			.then((ud) => {
				const refDoc = doc(firestore, "users", ud.uid);
				setDoc(refDoc, {
					displayName: username,
					userId: ud.uid,
				});
				console.log(`create account ${username}`);
			})
			.then(() => {
				navigate("/");
			})
			.catch((e) => {
				alert(e.message);
			});
	};

	return (
		<form className="form-control" onSubmit={createAccount}>
			<label className="label">
				<span className="label-text">username</span>
			</label>
			<input type="text" name="username" className="input" placeholder="username" onChange={handleUsername} />
			<label className="label">
				<span className="label-text">email</span>
			</label>
			<input type="email" name="email" className="input" placeholder="email" onChange={handleEmail} />
			<label className="label">
				<span className="label-text">password</span>
			</label>
			<input type="password" name="password" className="input" placeholder="password" onChange={handlePs} />
			<div className="card-actions justify-end">
				<button className="btn btn-outline">SIGN UP</button>
			</div>
		</form>
	);
};

export default SignUpForm;
