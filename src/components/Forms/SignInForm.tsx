import { Link } from "react-router-dom";

const SignInForm: React.VFC = () => {
	return (
		<form className="form-control">
			<label className="label">
				<span className="label-text">email</span>
			</label>
			<input type="email" name="email" className="input" placeholder="email" />
			<label className="label">
				<span className="label-text">password</span>
			</label>
			<input type="password" name="password" className="input" placeholder="password" />
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
