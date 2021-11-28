import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/contexts/AuthCx";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import UserProfilePage from "./pages/UserProfilePage";

const App: React.VFC = () => {
	return (
		<Fragment>
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/signin" element={<SignInPage />} />
						<Route path="/signup" element={<SignUpPage />} />
						<Route path="/userprofile" element={<UserProfilePage />} />
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</Fragment>
	);
};

export default App;
