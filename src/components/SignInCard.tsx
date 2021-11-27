import SignInForm from "./Forms/SignInForm";

const SignInCard: React.VFC = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="card bordered w-1/2 text-center bg-primary">
				<div className="card-body">
					<h1 className="card-title">Welcome to React Follow!</h1>
					<p className="mb-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit blanditiis amet soluta, voluptate porro
						totam aliquid error ducimus. Quam cumque voluptatibus reprehenderit ipsa perferendis consectetur facere
						rerum ipsam nemo!
					</p>
					<SignInForm />
				</div>
			</div>
		</div>
	);
};

export default SignInCard;
