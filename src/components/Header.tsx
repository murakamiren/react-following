import { Link } from "react-router-dom";

const Header: React.VFC = () => {
	return (
		<div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
			<div className="flex-1 px-2 mx-2">
				<span className="text-lg font-bold">React Follow</span>
			</div>
			<div className="justify-end px-2 mx-2">
				<Link to="/signin">
					<button className="btn btn-outline btn-sm">SIGN IN</button>
				</Link>
			</div>
		</div>
	);
};

export default Header;
