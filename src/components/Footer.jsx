import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<div className="h-[11rem] h-fit bg-emerald-300 flex sm:flex-col justify-between sm:items-center text-left py-16 px-20 sm:px-5 gap-10 sm:gap-5 [&>div]:sm:w-11/12 sm:w-full text-white">
			<div className="w-1/2">
				<h4 className="text-lg font-semibold mb-2">About Company</h4>
				<ul>
					<li className="text-justify">
						<p className="mb-3">
							SAVAGES hadir sebagai mutiara dari desa mewujudkan Desa dengan
							Ekonomi Digital melalui kebangkitan produktivitas potensi ubi kayu
							dan kolaborasi bersama masyarakat organisasi desa dengan
							pemanfaatan teknologi.
						</p>
						<p>
							Kami percaya pembangunan Desa pada sektor produksi pangan, menjadi
							kunci terciptanya ketahanan pangan dan ekonomi pertanian digital
							yang berkelanjutan.
						</p>
					</li>
				</ul>
			</div>
			<div className="w-1/3">
				<h4 className="text-lg font-semibold mb-2">Contact Here</h4>
				<ul className="[&>li>span]:ml-10 flex flex-col gap-2 [&>li]:flex [&>li]:gap-2  [&>li]:items-end">
					<li>
						<FontAwesomeIcon icon={faEnvelope} fontSize="large" />
						<a href="">
							<span>projectsavages@gmail.com</span>
						</a>
					</li>
					<li>
						<FontAwesomeIcon icon={faInstagram} fontSize="large" />
						<a href="">
							<span>savagesecosystem</span>
						</a>
					</li>
					<li>
						<FontAwesomeIcon icon={faYoutube} fontSize="large" />
						<a href="">
							<span>Savages Project</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
