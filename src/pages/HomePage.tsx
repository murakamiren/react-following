import { Fragment, useContext } from "react";
import { AuthCtx } from "../components/contexts/AuthCx";
import Header from "../components/Header";
import UserCard from "../components/UserCard";
// import UserFeed from "../components/UserFeed";

const HomePage: React.VFC = () => {
	const { currentUser } = useContext(AuthCtx);

	return (
		<div>
			<Header />
			{currentUser ? (
				<Fragment>
					<h2 className="text-neutral-content text-2xl text-center mt-4">Users you should follow!</h2>
					<div className="flex flex-col items-center">
						<UserCard uid="cfC9SSsuXHMbIBM5NuXPJFEGK792" username="dim" hobby="karaoke" />
						<UserCard uid="fdI9Ecbnw2aKbqJBhYADSh6qWM43" username="SHEEESH" hobby="playing Apex" />
					</div>
				</Fragment>
			) : (
				<h2 className="text-neutral-content text-2xl text-center mt-4">You need to log in to see the contents!</h2>
			)}
		</div>
	);
};

export default HomePage;
