/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mono: [
					'"JetBrains Mono"',
					'"Fira Code"',
					'ui-monospace',
					'SFMono-Regular',
					'Menlo',
					'Consolas',
					'"Liberation Mono"',
					'monospace',
				],
			},
			colors: {
				tui: {
					bg: '#0a0a0a',
					alt: '#101010',
					fg: '#e8e8e8',
					dim: '#8f8f8f',
					amber: '#ffb000',
					green: '#33ff00',
					border: '#333333',
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
