<template>
	<v-footer
		dark
		height="50px"
		class="px-3 py-3"
	>
		<v-spacer />
		<v-layout
			tag="p"
			justify-end
			align-center
			class="ma-0 pr-3"
		>
			&copy;{{ $t('footer.year') }}&nbsp;—&nbsp;
			<img
				width="20px"
				height="20px"
				class="developer mr-1"
				src="/img/dylan-broussard.jpg"
				alt=""
			>
			<strong>{{ $t('footer.name') }}</strong>
		</v-layout>
	</v-footer>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'AppFooter'
	});
</script>

<style lang="scss" scoped>
	.v-footer {
		background: #23333b;
	}

	.v-btn {
		height: inherit;
	}

	.developer {
		border-radius: 50%;
		border: 1px solid #fff;
	}
</style>
