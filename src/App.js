import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App bg-emerald-50">
			<Router>
				<div className="container m-auto ">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
