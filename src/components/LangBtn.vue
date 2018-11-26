<template>
	<v-menu
		class="menu-depth"
	>
		<v-btn
			slot="activator"
			:aria-label="`${$t('langBtn.label')} ${languages[$i18n.locale]}`"
			flat
		>
			<img
				:src="`/img/flags/${$i18n.locale}.svg`"
				class="current-flag"
				alt=""
			>
			<span
				v-if="$vuetify.breakpoint.mdAndUp"
				class="ml-2"
			>{{ languages[$i18n.locale] }}</span>
			<SvgIcon
				size="10px"
				class="ml-2"
				icon="expand"
			/>
		</v-btn>
		<v-list>
			<v-list-tile
				v-for="(title, lang, index) in languages"
				:key="index"
				avatar
			>
				<v-btn
					flat
					class="ma-0"
					@click="changeLang(lang)"
				>
					<v-list-tile-avatar>
						<img
							:src="`/img/flags/${lang}.svg`"
							class="flag-img"
							alt=""
						>
					</v-list-tile-avatar>

					<v-list-tile-title>{{ title }}</v-list-tile-title>
				</v-btn>
			</v-list-tile>
		</v-list>
	</v-menu>
</template>

<script lang="ts">
	import Vue from 'vue';

	import { loadLanguageAsync } from '@/i18n';

	export default Vue.extend({
		name: 'LangBtn',
		data() {
			return {
				languages: {
					fr: 'Français',
					en: 'English'
				}
			};
		},
		methods: {
			changeLang(lang: string) {
				loadLanguageAsync(lang);
			}
		}
	});
</script>

<style lang="scss" scoped>
	.v-avatar img {
		border-radius: 0%;
	}

	.v-list {
		.v-btn {
			width: 100%;
			height: 100%;
		}

		/deep/ .v-list__tile {
			padding: 0;
		}
	}

	.current-flag {
		width: 30px;
	}
</style>
