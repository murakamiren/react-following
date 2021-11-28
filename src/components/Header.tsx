import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthCtx } from "./contexts/AuthCx";
import logOut from "./feartures/logout";
import { useDisplayName } from "./Hooks/displayNameHook";
import defaultAvatar from "../assets/img/blank-profile-picture-g7424d4f97_1280.png";

const Header: React.VFC = () => {
	const { currentUser } = useContext(AuthCtx);
	const displayName = useDisplayName();

	return (
		<div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
			<div className="flex-1 px-2 mx-2">
				<Link to="/">
					<span className="text-lg font-bold">React Follow</span>
				</Link>
			</div>
			<div className="justify-end px-2 mx-2">
				{currentUser ? (
					<Fragment>
						<p>
							Whats Up!
							<Link to="/userprofile">
								<span className="text-accent ml-2">{displayName}</span>!
							</Link>
						</p>
						<div className="avatar">
							<div className="rounded-full w-10 h-10 mx-3 shadow">
								<img src={defaultAvatar} alt="user avatar" />
							</div>
						</div>
						<button className="btn btn-outline btn-sm ml-2" onClick={logOut}>
							SIGN OUT
						</button>
					</Fragment>
				) : (
					<Link to="/signin">
						<button className="btn btn-outline btn-sm">SIGN IN</button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
