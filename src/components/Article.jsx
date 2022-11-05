import React from "react";
import Slide1 from "../img/slide1.jpg";

const Article = (props) => {
	return (
		<div className="overflow-hidden w-1/4 bg-white rounded-xl p-2 shadow-lg">
			<img src={Slide1} alt="" className="rounded-xl" />
			<p className="leading-relaxed my-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi
				nulla error.
			</p>
		</div>
	);
};

export default Article;
