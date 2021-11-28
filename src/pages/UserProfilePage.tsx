import { doc, getDoc } from "@firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthCtx } from "../components/contexts/AuthCx";
import Header from "../components/Header";
import { firestore } from "../firebase";

const UserProfilePage: React.VFC = () => {
	const [manyFollow, setManyFollow] = useState(0);
	const [whoFollow, setWhoFollow] = useState<Array<string>>([]);
	const { currentUser } = useContext(AuthCtx);

	useEffect(() => {
		(async () => {
			if (currentUser) {
				const querySnapshot = await getDoc(doc(firestore, "following", currentUser.uid));
				// console.log(querySnapshot.data());
				setManyFollow(() => 0);
				if (querySnapshot.exists()) {
					const queryData = querySnapshot.data();
					Object.keys(queryData).forEach((key) => {
						if (queryData[key]) {
							setManyFollow((pre) => pre + 1);
							setWhoFollow((pre) => [...pre, key]);
						}
					});
				} else {
					setManyFollow(() => 0);
				}
			}
		})();
	}, [currentUser]);

	return (
		<div>
			<Header />
			<div className="flex flex-col items-center">
				<h2 className="text-4xl mb-4">this is profile</h2>
				<p>you following : {manyFollow} people!</p>
				<ul className="flex flex-col items-center">
					{whoFollow.map((follower, i) => (
						<li key={i}>{follower}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default UserProfilePage;
