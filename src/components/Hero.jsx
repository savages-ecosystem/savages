import React, { useState } from "react";
import Slide from "./Slide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
	const slideInfo = [
		{
			url: "../img/slide1.jpg",
			content: {
				heading: "Savages",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, vero.",
				body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ea ullam eius quo dolorum sed ut voluptas, necessitatibus labore iure.",
			},
		},
		{
			url: "../img/slide2.jpg",
			content: {
				heading: "Slide 2",
				body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore atque velit quidem, omnis enim placeat excepturi earum praesentium culpa debitis, totam voluptatum ipsam aut, tenetur sapiente laborum laboriosam repellendus quas!",
			},
		},
		{
			url: "../img/slide3.jpg",
			content: {
				heading: "Slide 3",
				body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore atque velit quidem, omnis enim placeat excepturi earum praesentium culpa debitis, totam voluptatum ipsam aut, tenetur sapiente laborum laboriosam repellendus quas!",
			},
		},
	];

	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	return (
		<section className="pt-16 pb-32 sm:pt-10">
			<Slider {...sliderSettings} className="m-auto">
				{slideInfo.map((slide, index) => {
					return <Slide slideInfo={slide} key={index} />;
				})}
			</Slider>
		</section>
	);
};

export default Hero;
