<template>
	<v-toolbar
		dark
		fixed
	>
		<v-toolbar-items>
			<LangBtn
				:available-languages="['fr', 'en']"
				:callback="changeLang"
				:label="$t('langBtn.label')"
				:current-lang="$i18n.locale"
			/>

			<v-btn
				:aria-label="$t('toolbar.home')"
				flat
				to="/"
				class="ml-3"
			>
				<SvgIcon
					icon="home"
					medium
				/>
				<span
					v-if="$vuetify.breakpoint.mdAndUp"
					class="ml-3"
				>
					{{ $t('toolbar.home') }}
				</span>
			</v-btn>
			<v-spacer />
			<v-btn
				flat
				to="/cart"
			>
				{{ $t('toolbar.cart') }}
				<v-badge
					class="ml-3"
					overlap
					color="grey darken-2"
				>
					<span
						v-if="cartCount"
						slot="badge"
					>{{ cartCount }}</span>
					<SvgIcon
						icon="cart"
						medium
					/>
				</v-badge>
			</v-btn>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { mapGetters } from 'vuex';

	import { loadLanguageAsync } from '@/i18n';

	// import LangBtn from './LangBtn.vue';

	export default Vue.extend({
		name: 'AppToolbar',
		// components: {
		// 	LangBtn
		// },
		computed: {
			...mapGetters([
				'cartCount'
			])
		},
		methods: {
			changeLang(lang: string) {
				loadLanguageAsync(lang);
			}
		}
	});
</script>

<style lang="scss" scoped>
	.v-toolbar {
		z-index: 5;
		background: #1d0c0a;
	}

	.v-toolbar,
	.v-toolbar /deep/ .v-toolbar__content {
		height: 64px !important;
	}

	.v-toolbar__items {
		width: 100%;
	}

	.v-btn {
		min-width: 0;
	}
</style>
