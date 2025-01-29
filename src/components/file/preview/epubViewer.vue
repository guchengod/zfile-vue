<template>
	<div id="epubReader" style="height: 100vh">
		<vue-reader :url="fileUrl" />
	</div>
</template>

<script setup>
import { VueReader } from 'vue-reader'

// 组件接收的属性：
//  fileUrl:    文件下载路径
//  fileName:   文件名
defineProps({
	fileUrl: String,
	fileName: String,
})

// // 文件内容
// const fileContent = ref('')
//
// import { getFileTextReq, getFileTextFromServerReq } from '~/api/common'
//
// // 挂载时，加载文件内容，并初始化播放器
// onMounted(() => {
// 	let fileUrl = props.fileUrl
// 	getFileTextReq(fileUrl)
// 		.then((res) => {
// 			fileContent.value = res.data
// 			// initMonaco()
// 		})
// 		.catch((e) => {
// 			console.log(
// 				`默认加载文本文件: [${props.fileName}] - [${props.fileUrl}] 失败, 尝试从服务端加载.`,
// 				e
// 			)
// 			getFileTextFromServerReq({ url: fileUrl })
// 				.then((res) => {
// 					fileContent.value = res.data
// 					// initMonaco()
// 				})
// 				.catch((e) => {
// 					console.log(
// 						`从服务器端加载文本文件: [${props.fileName}] - [${props.fileUrl}] 失败.`,
// 						e
// 					)
// 					alert('加载文件预览器失败，请检测文件下载链接是否正常')
// 				})
// 		})
// })
//
// // 关闭时销毁所有组件
// onUnmounted(() => {
// 	// monaco.editor.getModels().forEach((item) => {
// 	// 	item.dispose()
// 	// })
// })

// import useCommon from '~/composables/useCommon'
// const { isNotMobile } = useCommon()

// // 初始化编辑器
// let initMonaco = () => {
// 	let model = monaco.editor.createModel(
// 		fileContent.value,
// 		undefined,
// 		monaco.Uri.parse(props.fileName)
// 	)
//
// 	monaco.editor.create(document.getElementById('zfile-monaco-editor'), {
// 		model: model,
// 		// table 个数
// 		tabSize: 4,
// 		// 自动布局
// 		automaticLayout: true,
// 		// 底部滚动超出
// 		scrollBeyondLastLine: false,
// 		// 自动换行
// 		wordWrap: true,
// 		// 只读
// 		readOnly: true,
// 		minimap: {
// 			enabled: isNotMobile.value,
// 		},
// 		lineNumbers: isNotMobile.value ? 'on' : 'off',
// 	})
// }
</script>

<style lang="scss" scoped>
</style>
