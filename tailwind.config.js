/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ["./src/**/*.js", "./public/index.html"],
	content: [],
	theme: {
		extend: {
			fontSize: {
				h3: "0.875rem",
			},
			colors: {
				home: "#0A020A",
			},
			width: {
				"fit-content": "fit-content",
			},
			backgroundImage: (theme) => ({
				"gradient-radial":
					"linear-gradient(180deg, #F0F3FF 10.49%, rgba(107, 107, 107, 0.00) 30.67%, rgba(0, 0, 0, 0.00) 100%)",
				'free-service': "url('./assets/imgs/free-service.png')",
			}),
		},
		variants: {
			extend: {
				display: ['hover', 'focus'],
			}
		},
	},
	plugins: [],
};
