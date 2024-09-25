import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactCollectFeedbackDemo from "./pages/ReactCollectFeedbackDemo";

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/react-collect-feedback-demo"
						element={<ReactCollectFeedbackDemo />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
