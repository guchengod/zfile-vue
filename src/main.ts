// 你自定义的 css
import './styles/main.css'
import './styles/tailwind/index.scss'
import 'babel-polyfill'

import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { createPinia } from 'pinia'

// 导入所有模块
import pinia from './modules/pinia'
import router from './modules/router'
import animate from './modules/animate'
import elementPlus from './modules/element-plus'
import svgIcon from './modules/svg-icon'
import vueRequest from './modules/vue-request'
import nprogress from './modules/nprogress'
import mock from './modules/mock'

// 创建应用实例
const app = createApp(App)

// 初始化所有模块
pinia(app)
router(app)
animate(app)
elementPlus(app)
svgIcon(app)
vueRequest(app)
nprogress()
mock(app)

// 现在可以安全地使用 store
import useGlobalConfigStore from '~/stores/global-config'
const globalConfigStore = useGlobalConfigStore()

import config from '../package.json'
console.log(
	'\n %c ZFile ' +
		config.version +
		' %c https://github.com/zhaojun1998/zfile \n\n',
	'background: #35495e; padding: 1px; border-radius: 3px 0 0 3px; color: #fff',
	'background: #fadfa3; padding: 1px; border-radius: 0 3px 3px 0; color: #fff'
)

axios
	.get('/zfile.config.json')
	.then((res) => {
		globalConfigStore.updateZfileConfig(res.data)
	})
	.finally(() => {
		app.mount('#app')
	})
