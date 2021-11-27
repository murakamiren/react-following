import SignUpForm from "./Forms/SignUpForm";

const SignUpCard: React.VFC = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="card bordered w-1/2 text-center bg-primary">
				<div className="card-body">
					<h1 className="card-title">Hello! New-comer!</h1>
					<p className="mb-6">Sign up now!</p>
					<SignUpForm />
				</div>
			</div>
		</div>
	);
};

export default SignUpCard;
