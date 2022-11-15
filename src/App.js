import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";

function App() {
	return (
		<div className="App bg-emerald-50">
			<Router>
				<div className="container m-auto ">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<Products />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;
