import React from "react";

const Banner = () => {
	return (
		<div className="px-28 sm:px-5">
			<div className="bg-emerald-400 mx-auto rounded-lg h-72 sm:h-80 p-10 sm:px-6 sm:gap-5 text-left text-white flex flex-col justify-evenly">
				<h1 className="text-3xl font-bold">Let's Save The Ages!</h1>
				<div className="flex sm:flex-col justify-between items-center gap-10">
					<p className="w-2/3 sm:w-full sm:text-justify">
						Kamu ingin berkontribusi terhadap produksi ketahanan pangan
						berkelanjutan dalam mewujudkan desa ekonomi digital di Desa Benteng
						Gajah? Mari SAVE THE AGES dengan bergabung menjadi SAVER bersama
						kami!
					</p>
					<div className="w-1/2 sm:w-full text-right text-2xl">
						<a href="#">Join Community »</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
