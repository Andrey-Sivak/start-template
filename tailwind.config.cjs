/** @type {import('tailwindcss').Config} */
module.exports = {
	future: {
		hoverOnlyWhenSupported: true,
	},
	mode: 'jit',
	content: [
		'./*.html',
		'./src/js/**/*.js',
		'./src/scss/**/*.scss',
	],
	theme: {
		extend: {
			spacing: {
				0.75: '0.1875rem',
				2.75: '0.6875rem',
				3.25: '0.8125rem',
				4.5: '1.125rem',
				5.5: '1.375rem',
				6.25: '1.5625rem',
				6.5: '1.625rem',
				7.5: '1.875rem',
				8.5: '2.125rem',
				9.5: '2.375rem',
				10.5: '2.625rem',
				11: '2.75rem',
				11.5: '2.875rem',
				12.5: '3.125rem',
				13: '3.25rem',
				13.5: '3.375rem',
				14.5: '3.625rem',
				15: '3.75rem',
				15.5: '3.875rem',
				16: '4rem',
				16.5: '4.125rem',
				17: '4.25rem',
				17.5: '4.375rem',
				18: '4.5rem',
				18.5: '4.625rem',
				19: '4.75rem',
				19.5: '4.875rem',
				21: '5.25rem',
				21.5: '5.375rem',
				22: '5.5rem',
				22.5: '5.625rem',
				23.5: '5.875rem',
				24.5: '6.125rem',
				25: '6.25rem',
				26: '6.5rem',
				26.5: '6.625rem',
				27: '6.75rem',
				27.5: '6.875rem',
				28: '7rem',
				29: '7.25rem',
				30: '7.5rem',
				33.75: '8.4375rem',
				34: '8.5rem',
				35: '8.75rem',
				36.5: '9.125rem',
				38: '9.5rem',
				42: '10.5rem',
				42.5: '10.625rem',
				45: '11.25rem',
				47: '11.75rem',
				48: '12rem',
				50: '12.5rem',
				52: '13rem',
				73.5: '18.375rem',
			},
			transitionDuration: {
				600: '600ms',
				700: '700ms',
				800: '800ms',
				900: '900ms',
			},
			fontFamily: {},
			fontSize: {},
			colors: {},
			zIndex: {
				max: 1000000,
			},
		},
	},
	plugins: [],
};
