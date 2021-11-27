import Header from "../components/Header";
import UserCard from "../components/UserCard";

const HomePage: React.VFC = () => {
	return (
		<div>
			<Header />
			<h2 className="text-neutral-content text-2xl text-center mt-4">Users you should follow!</h2>
			<div className="flex justify-center">
				<UserCard />
			</div>
		</div>
	);
};

export default HomePage;
