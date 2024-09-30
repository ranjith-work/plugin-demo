import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ReactCollectFeedbackDemo from "./pages/ReactCollectFeedbackDemo";
import ReactWebNotifyDemo from "./pages/ReactWebNotifyDemo";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/react-collect-feedback-demo"
					element={<ReactCollectFeedbackDemo />}
				/>
				<Route path="/react-web-notify-demo" element={<ReactWebNotifyDemo />} />
			</Routes>
		</Router>
	);
}

export default App;
