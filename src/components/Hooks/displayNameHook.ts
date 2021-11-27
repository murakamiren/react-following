import { doc, getDoc } from "@firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { AuthCtx } from "../contexts/AuthCx";

export const useDisplayName = () => {
	const { currentUser } = useContext(AuthCtx);
	const [username, setUsername] = useState("");

	useEffect(() => {
		if (currentUser) {
			const docRef = doc(firestore, "users", currentUser.uid);
			const docSnap = getDoc(docRef);
			docSnap
				.then((d) => {
					// console.log(d.data());
					return d.data();
				})
				.then((ud: any) => {
					setUsername(() => ud.displayName);
				});
		}
	}, [currentUser]);

	return username;
};
