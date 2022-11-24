import React from "react";
import Movement from "../components/Movement";
import DataMedium from "../data/dataMedium";

const Movements = () => {
	const mediumData = DataMedium.dataMedium.map((data, index) => {
		return {
			img: data.image,
			title: data.title,
			description: data.description,
			link: data.link,
		};
	});

	return (
		<div className="w-10/12 sm:w-full m-auto">
			<h1 className="text-3xl my-8">Our Movements</h1>
			<div className="m-auto w-10/12 sm:w-11/12">
				{mediumData.map((data, index) => {
					// return <h4>test</h4>;
					return <Movement data={data} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Movements;
