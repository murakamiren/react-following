import { signOut } from "@firebase/auth";
import { auth } from "../../firebase";

const logOut = () => {
	signOut(auth)
		.then(() => {
			console.log("logout");
		})
		.catch((e) => {
			alert(e.message);
		});
};

export default logOut;
