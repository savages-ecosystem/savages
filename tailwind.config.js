/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		backgroundImage: {
			"hero-pattern": "url('')",
			slide1: "url('./img/slide1.jpg')",
		},
	},
	plugins: [],
};
