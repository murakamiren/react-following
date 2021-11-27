import { User } from "@firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../../firebase";

type AuthCtxProps = {
	currentUser: User | null;
};

type AuthProviderProps = {
	children: ReactNode;
};

const AuthCtx = createContext<AuthCtxProps>({ currentUser: null });

const AuthProvider: React.VFC<AuthProviderProps> = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			console.log(user);
		});
	}, []);

	return <AuthCtx.Provider value={{ currentUser }}>{children}</AuthCtx.Provider>;
};

export default AuthProvider;
