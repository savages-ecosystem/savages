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
					"SAVAGES (Sustainable Village Management System) of CASSAVA : Sistem Pintar Tata Kelola Ubi Kayu dalam Memaksimalkan Produksi Pangan Berkelanjutan menuju Desa dengan Ekonomi Digital",
				body: [],
			},
		},
		{
			url: "../img/slide2.jpg",
			content: {
				heading: "Tahukah kamu?",
				body: [
					"Sebagai Negara hijau agraris, Indonesia dengan potensi sumber daya alam yang melimpah  memegang peran penting dan strategis dalam perekonomian nasional. Salah satu sumber daya alam yang melimpah di Indonesia adalah Ubi Kayu yang menjadi komoditas prospektif.",
					"Tumbuh dari akar, ubi kayu mengakar dianekaragamkan pengolahan produksinya tentunya dapat memaksimalkan ketahanan pangan dan ekonomi berkelanjutan",
				],
			},
		},
		{
			url: "../img/slide3.jpg",
			content: {
				heading: "Kabar Ketahanan Pangan di Indonesia",
				body: [
					"Turunnya indeks ketahanan pangan yang melemah menjadi 59,2 pada tahun 2021 menempatkan Indonesia berada di peringkat ke-69 terbelakang dari 113 negara (databooks, 2022). Ketahanan pangan tentunya tidak lepas dari sifat produksi komoditi pangan. Kondisi ini tentunya merupakan sebuah peringatan pentingnya kita memaksimalkan produksi komoditi pangan tersebut. Oleh karena itu, dengan melakukan pengelolaan yang baik melalui SAVAGES dapat menjadi sebuah langkah kontribusi dalam ketahanan pangan di Indonesia.",
				],
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
