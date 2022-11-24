import React from "react";
import Product from "../components/Product";
import Image from "../img/slide1.jpg";

const Products = () => {
	return (
		<div className="pb-20 bg-emerald-50">
			<div className="w-10/12 sm:w-11/12 m-auto">
				<h2 className="text-3xl font-semibold my-10">Savages Products</h2>
				<div className="flex sm:flex-col justify-evenly gap-10">
					<Product image={Image} />
					<Product image={Image} />
				</div>
			</div>
		</div>
	);
};

export default Products;
