import defaultAvatar from "../assets/img/blank-profile-picture-g7424d4f97_1280.png";

const UserCard: React.VFC = () => {
	return (
		<div className="card lg:card-side bordered shadow mt-8 w-9/12">
			<div className="card-body">
				<h3 className="card-title flex flex-row items-center">
					<div className="avatar mr-3">
						<div className="rounded-full w-8 h-8 shadow">
							<img src={defaultAvatar} alt="user avatar" />
						</div>
					</div>
					aaaa
				</h3>
				<p>my hobby is playing csgo</p>
				<div className="card-actions">
					<button className="btn btn-outline btn-accent btn-sm">Follow!</button>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
