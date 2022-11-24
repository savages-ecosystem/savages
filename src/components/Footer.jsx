import React from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
	import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
	import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

	const Footer = () => {
		return (
			<div className="h-[10rem] sm:h-fit bg-emerald-300 flex sm:flex-col justify-start sm:items-center text-left py-5 px-52 sm:px-5 gap-10 sm:gap-5 [&>div]:w-1/2 [&>div]:sm:w-11/12 sm:w-full text-white">
				<div>
					<h4 className="text-lg font-semibold mb-2">About Company</h4>
					<ul>
						<li>
							<p className="text-justify">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
								voluptatibus deserunt esse et libero excepturi similique cumque,
								cum officia minus fugit placeat molestias, beatae consectetur?
								Distinctio rem unde eum omnis, officia consequatur nesciunt.
							</p>
						</li>
					</ul>
				</div>
				<div>
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
