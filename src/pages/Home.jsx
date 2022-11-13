import React from "react";
import Hero from "../components/Hero";
import Articles from "../components/Articles";
import Partner from "../components/Partner";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Home = () => {
	return (
		<div className=" bg-emerald-50 m-auto">
			<Hero />
			<Banner />
			<Articles />
			<Partner />
			<Testimonial />
			<Footer />
		</div>
	);
};

export default Home;
