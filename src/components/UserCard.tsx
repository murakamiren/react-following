import { doc, getDoc, setDoc } from "@firebase/firestore";
import { useContext, useState } from "react";
import defaultAvatar from "../assets/img/blank-profile-picture-g7424d4f97_1280.png";
import { firestore } from "../firebase";
import { AuthCtx } from "./contexts/AuthCx";

const UserCard: React.VFC = () => {
	const [isFollow, setIsFollow] = useState(false);
	const { currentUser } = useContext(AuthCtx);
	const targetUser = {
		uid: "cfC9SSsuXHMbIBM5NuXPJFEGK792",
		username: "dim",
	};

	const btnFollowed = "btn btn-accent btn-sm";
	const btnunFollowed = "btn btn-outline btn-accent btn-sm";
	let btnStyle = "";

	if (isFollow) {
		btnStyle = btnFollowed;
	} else {
		btnStyle = btnunFollowed;
	}

	const handleFollow = async () => {
		if (currentUser) {
			const docRef = doc(firestore, "following", currentUser.uid);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const follow = docSnap.data()[targetUser.uid];
				if (follow) {
					setIsFollow(() => false);
					await setDoc(docRef, {
						[targetUser.uid]: false,
					});
					console.log(`you unfollowed ${targetUser.username}`);
				} else {
					setIsFollow(() => true);
					await setDoc(docRef, {
						[targetUser.uid]: true,
					});
					console.log(`you refollowed ${targetUser.username}`);
				}
			} else {
				await setDoc(docRef, {
					[targetUser.uid]: true,
				});
				console.log(`you followed ${targetUser.username}`);
			}
		}
	};

	const handleFollower = async () => {
		if (currentUser) {
			const docRef = doc(firestore, "followers", targetUser.uid);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const followed = docSnap.data()[currentUser.uid];
				if (followed) {
					await setDoc(docRef, {
						[currentUser.uid]: false,
					});
				} else {
					await setDoc(docRef, {
						[currentUser.uid]: true,
					});
				}
			} else {
				await setDoc(docRef, {
					[currentUser.uid]: true,
				});
			}
		}
	};

	const handleFollowBtn = () => {
		handleFollow();
		handleFollower();
	};

	return (
		<div className="card lg:card-side bordered shadow mt-8 w-9/12">
			<div className="card-body">
				<h3 className="card-title flex flex-row items-center">
					<div className="avatar mr-3">
						<div className="rounded-full w-8 h-8 shadow">
							<img src={defaultAvatar} alt="user avatar" />
						</div>
					</div>
					dim has 2525 follower
				</h3>
				<p>my hobby is playing csgo</p>
				<div className="card-actions">
					<button className={btnStyle} onClick={handleFollowBtn}>
						Follow!
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
