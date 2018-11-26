<template>
	<v-layout
		column
		class="ctn"
		justify-center
	>
		<v-layout
			column
			justify-center
			class="frame py-5 px-5"
		>
			<div class="content">
				<h1 class="main-title">{{ $t('notFound.title') }}</h1>
				<p>{{ $t('notFound.info') }}</p>
				<v-btn
					to="/"
					depressed
					class="to-home ma-0"
				>
					<SvgIcon
						icon="go-back-arrow"
						class="mr-2"
					/>
					{{ $t('notFound.btn') }}
				</v-btn>
			</div>
		</v-layout>
	</v-layout>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'NotFound'
	});
</script>

<style lang="scss" scoped>
	.ctn {
		min-height: 80vh;
		background-image: linear-gradient(#a3dae3, #39545f);
	}

	.frame {
		flex: none;
		color: #1c4c55;
		min-height: 350px;
		background: #a3dae3;
	}

	.content {
		width: 2132px;
		margin: 0 auto;
	}

	.to-home {
		color: #1c4c55;
	}

	.main-title {
		font-size: 5rem;
		font-family: serif;
	}
</style>
