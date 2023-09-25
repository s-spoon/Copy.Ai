import { BrowserRouter, Route, Routes } from "react-router-dom";
import i18n from "./i18n";
import Chat from "./pages/Chat";
import { Provider } from "react-redux";
import Layout from "./pages/Layout";
import store from "./store";
import Projects from "./pages/Projects";
import Infobase from "./pages/Infobase";
import BrandVoice from "./pages/BrandVoice";
import Login from "./pages/Login";
import Templates from "./pages/Templates";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path="/"
						element={<Chat />}
					/>
					<Route
						exact
						path="/chat"
						element={<Chat />}
					/>
					<Route
						exact
						path="/projects"
						element={<Projects />}
					/>
					<Route
						exact
						path="/infobase"
						element={<Infobase />}
					/>
					<Route
						exact
						path="/brand-voice"
						element={<BrandVoice />}
					/>
					<Route
						exact
						path="/login"
						element={<Login />}
					/>
					<Route
						exact
						path="/templates"
						element={<Templates />}
					/>

					<Route
						path="*"
						element={<p>Page Will Be Soon</p>}
					/>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}
export default App;
