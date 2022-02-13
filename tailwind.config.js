module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			display: ['Syne'],
			body: ['"Space Grotesk"'],
		},
		extend: {
			colors: {
				primary: '#7311EB',
				accent: '#41FCF0',
				night: '#121828',
				day: '#E3E3E3',
			},
		},
	},
	plugins: ['gatsby-plugin-postcss'],
};
