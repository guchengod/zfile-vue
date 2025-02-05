import { resolve } from 'node:path'
import Tov from './presets/tov'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
	const isProduction = mode === 'production'
	return {
		resolve: {
			alias: {
				'~': resolve(__dirname, 'src'),
			},
		},
		build: {
			sourcemap: !isProduction,
			target: 'es2022',
			cssMinify: isProduction ? 'lightningcss' : false,
			chunkSizeWarningLimit: isProduction ? 500 : 1000,
			assetsInlineLimit: isProduction ? 4096 : 8192,
			brotliSize: isProduction,
			minify: isProduction ? 'terser' : 'esbuild',
			terserOptions: {
				compress: {
					drop_console: isProduction,
					drop_debugger: isProduction,
					pure_funcs: isProduction
						? [
								'console.log',
								'console.info',
								'console.debug',
								'console.warn',
								'console.error',
						  ]
						: [],
				},
			},
		},
		css: {
			devSourcemap: !isProduction,
		},
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
	}
})
