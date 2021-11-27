import { collection, getDocs, query } from "@firebase/firestore";
import { firestore } from "../../firebase";

export const getUserData = async () => {
	try {
		const q = query(collection(firestore, "users"));
		const querySnapshot = await getDocs(q);
		const userdata: any = [];
		querySnapshot.forEach((doc) => {
			userdata.push(doc.data());
		});
		return userdata;
	} catch (error) {
		console.log(error);
	}
};
