import { BrowserRouter, Route, Routes } from "react-router-dom";
import i18n from "./i18n";
import Chat from "./pages/Chat";
import { Provider } from 'react-redux';
import Layout from "./pages/Layout";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path="/"
						element={<Layout />}
					/>
          <Route
						exact
						path="/chat"
						element={<Chat />}
					/>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}
export default App;
