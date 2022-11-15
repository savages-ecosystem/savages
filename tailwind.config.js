/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		backgroundImage: {
			slide1: "url('./img/slide1.jpg')",
			navbarImage:
				"linear-gradient(to left , emerald-400, rgba('#28b485',0.8)))",
		},
		extend: {
			keyframes: {
				navbar: {
					"0%": {
						backgroundImage: "navbarImage",
					},
					"50%": { transform: "rotate(3deg)" },
				},
			},
			animation: {
				navbar: "nav ease-in-out",
			},
		},
	},
	plugins: [],
};
