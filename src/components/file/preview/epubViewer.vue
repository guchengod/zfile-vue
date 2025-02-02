<template>
	<div id="epubReader" style="height: 100vh">
		<vue-reader :url="fileUrl" />
	</div>
</template>

<script setup lang="ts">
import { VueReader } from 'vue-reader'

// 组件接收的属性：
//  fileUrl:    文件下载路径
//  fileName:   文件名
defineProps<{
	fileUrl: String
	fileName: String
}>()
</script>

<style lang="scss" scoped></style>
