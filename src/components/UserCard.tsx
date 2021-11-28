import { doc, getDoc, setDoc, updateDoc } from "@firebase/firestore";
import { useContext, useEffect, useState } from "react";
import defaultAvatar from "../assets/img/blank-profile-picture-g7424d4f97_1280.png";
import { firestore } from "../firebase";
import { AuthCtx } from "./contexts/AuthCx";

type UserCardProps = {
	uid: string;
	username: string;
	hobby: string;
};

const UserCard: React.VFC<UserCardProps> = ({ uid, username, hobby }) => {
	const [manyFollow, setManyFollow] = useState(0);
	const [followBtn, setFollowBtn] = useState("");
	const [btnStyle, setBtnStyle] = useState("");
	const [isFollow, setIsFollow] = useState(Boolean);
	const { currentUser } = useContext(AuthCtx);
	const targetUser = {
		uid: uid,
		username: username,
	};

	const btnFollowed = "btn btn-accent btn-sm btn-outline";
	const btnunFollowed = "btn btn-accent btn-sm";

	const handleFollow = async () => {
		if (currentUser) {
			const docRef = doc(firestore, "following", currentUser.uid);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const follow = docSnap.data()[targetUser.uid];
				if (follow) {
					await updateDoc(docRef, {
						[targetUser.uid]: false,
					});
					setIsFollow(() => false);
					console.log(`you unfollowed ${targetUser.username}`);
				} else if (!follow) {
					await updateDoc(docRef, {
						[targetUser.uid]: true,
					});
					setIsFollow(() => true);
					console.log(`you refollowed ${targetUser.username}`);
				}
			} else if (!docSnap.exists()) {
				await setDoc(docRef, {
					[targetUser.uid]: true,
				});
				setIsFollow(() => true);
				console.log(`you followed ${targetUser.username}`);
			}
		}
	};

	const handleFollower = async () => {
		if (currentUser) {
			const docFollowerRef = doc(firestore, "followers", targetUser.uid);
			const docFollowerSnap = await getDoc(docFollowerRef);
			if (docFollowerSnap.exists()) {
				if (isFollow) {
					await updateDoc(docFollowerRef, {
						[currentUser.uid]: false,
					});
				} else if (!isFollow) {
					await updateDoc(docFollowerRef, {
						[currentUser.uid]: true,
					});
				}
			} else if (!docFollowerSnap.exists()) {
				await setDoc(docFollowerRef, {
					[currentUser.uid]: true,
				});
			}
		}
	};

	const handleFollowBtn = async () => {
		await handleFollow();
		await handleFollower();
	};

	const followEffect = () => {
		if (isFollow) {
			setFollowBtn(() => "unfollow");
			setBtnStyle(() => btnunFollowed);
		} else {
			setFollowBtn(() => "follow");
			setBtnStyle(() => btnFollowed);
		}
	};

	const handleManyFollow = async () => {
		if (currentUser) {
			const docRef = doc(firestore, "followers", targetUser.uid);
			const docSnap = await getDoc(docRef);
			setManyFollow(() => 0);
			if (docSnap.exists()) {
				const followers = docSnap.data();
				Object.keys(followers).forEach((key) => {
					if (followers[key]) {
						console.log(followers[key]);
						setManyFollow((pre) => pre + 1);
					}
				});
			} else {
				setManyFollow(() => 0);
			}
		}
	};

	const manyFollowDelay = () => {
		setTimeout(handleManyFollow, 500);
	};

	const initialIsFollowQuery = async () => {
		if (currentUser) {
			const docRef = doc(firestore, "following", currentUser.uid);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				const follow = docSnap.data()[targetUser.uid];
				if (follow) {
					setIsFollow(() => true);
				} else if (!follow) {
					setIsFollow(() => false);
				}
			} else if (!docSnap.exists()) {
				setIsFollow(() => false);
			}
		}
	};

	useEffect(() => {
		followEffect();
		manyFollowDelay();
		initialIsFollowQuery();
	}, [isFollow]);

	return (
		<div className="card lg:card-side bordered shadow-lg mt-8 w-9/12">
			<div className="card-body">
				<h3 className="card-title flex flex-row items-center">
					<div className="avatar mr-3">
						<div className="rounded-full w-8 h-8 shadow">
							<img src={defaultAvatar} alt="user avatar" />
						</div>
					</div>
					{username} has {manyFollow} followers
				</h3>
				<p>my hobby is {hobby}</p>
				<div className="card-actions">
					<button className={btnStyle} onClick={handleFollowBtn}>
						{followBtn}
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
