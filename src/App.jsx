import { Routes, Route } from "react-router-dom";

import MainScreen from "./screens/MainScreen";
import DownloadScreen from "./screens/DownloadScreen";
import AboutScreen from "./screens/AboutScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import Layout from "./components/Layout";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<MainScreen />} />
				<Route path="download" element={<DownloadScreen />} />
				<Route path="about" element={<AboutScreen />} />
				<Route path="*" element={<NotFoundScreen />} />
			</Route>
		</Routes>
	);
}
