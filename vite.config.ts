import { resolve } from 'node:path'
import Tov from './presets/tov'
import { defineConfig } from 'vite'

export default defineConfig({
	resolve: {
		alias: {
			// '~/': `${resolve(__dirname, 'src')}/`,
			'~/': `${resolve(__dirname, 'src')}/`,
		},
	},
	build: {
		target: 'es2022',
		cssMinify: 'lightningcss',
	},
	css: {},
	// define: {
	// 	'process.env': {},
	// },
	server: {
		host: '0.0.0.0',
	},
	optimizeDeps: {
		esbuildOptions: {
			target: 'es2022',
		},
	},
	plugins: [Tov()],
})
