// 你自定义的 css
import './styles/main.css'
import './styles/tailwind/index.scss'
import 'babel-polyfill'
// animate 动画样式
import 'animate.css/animate.min.css' //引入

import 'element-plus/es/components/message-box/style/css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/notification/style/css'
import 'element-plus/es/components/loading/style/css'
import 'element-plus/theme-chalk/display.css'
import 'element-plus/theme-chalk/el-loading.css'

import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { createPinia } from 'pinia'

import { setGlobalOptions } from 'vue-request'

// 创建应用实例
const app = createApp(App)

// 初始化 Pinia
app.use(createPinia())

// 初始化 vue-request
setGlobalOptions({})

// 初始化路由
import { router } from '~/modules/router'
app.use(router)

// 初始化 NProgress
import NProgress from 'nprogress'
router.beforeEach(() => {
	NProgress.start()
})
router.afterEach(() => {
	NProgress.done()
})

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
