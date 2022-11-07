import React, { useState } from "react";
import Slide from "./Slide";

const Hero = () => {
	const [slideIndex, setSlideIndex] = useState(1);
	const slideInfo = [
		{ url: "../img/slide1.jpg" },
		{ url: "../img/slide2.jpg" },
		{ url: "../img/slide3.jpg" },
		{ url: "../img/slide4.jpg" },
	];

	const handleSlide = (index) => {
		setSlideIndex(index);
	};
	return (
		<section className="my-16">
			<Slide slideInfo={slideInfo[slideIndex]} />
			<ul className="flex justify-center gap-10">
				{slideInfo.map((slide, index) => {
					return (
						<ul
							key={index}
							onClick={() => {
								handleSlide(index);
							}}
						>
							0
						</ul>
					);
				})}
			</ul>
		</section>
	);
};

export default Hero;
