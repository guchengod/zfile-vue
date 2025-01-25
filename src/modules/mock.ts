/**
 * 该模块主要给生产时的 mock 用，一般情况下你并不需要关注
 */
import { App } from 'vue'
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import { createFetchSever } from '../../presets/shared/mock'

export default function(app: App) {
	const shouldCreateServer =
		!import.meta.env.DEV && import.meta.env.VITE_APP_MOCK_IN_PRODUCTION === 'true'

	// 生产环境时才创建服务
	if (shouldCreateServer) {
		const mockModules: any[] = []

		const modules = import.meta.glob('../../mock/*.ts', {
			eager: true,
			import: 'default'
		})

		Object.values(modules).forEach((v) => {
			if (Array.isArray(v)) {
				mockModules.push(...v)
			}
		})

		createProdMockServer(mockModules)
		createFetchSever(mockModules)
	}
}
