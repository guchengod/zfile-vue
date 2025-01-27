<template>
	<img
		v-if="storageConfigStore.globalConfig.siteHomeLogo"
		id="zfile-home-logo"
		class="my-auto h-6 mr-2"
		:src="storageConfigStore.globalConfig.siteHomeLogo"
		alt="home"
		@click="openLink"
	/>
</template>

<script setup>
import useStorageConfigStore from '~/stores/storage-config'
let storageConfigStore = useStorageConfigStore()

const openLink = () => {
	if (storageConfigStore.globalConfig.siteHomeLogoLink) {
		if (storageConfigStore.globalConfig.siteHomeLogoTargetMode === '_blank') {
			window.open(storageConfigStore.globalConfig.siteHomeLogoLink)
		} else {
			location.href = storageConfigStore.globalConfig.siteHomeLogoLink
		}
	}
}
</script>

<style scoped></style>
