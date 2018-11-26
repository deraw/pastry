<template>
	<v-layout
		tag="aside"
		class="contact"
		wrap
	>
		<v-layout
			column
			class="pa-4"
		>
			<h2 class="white--text headline mb-2 font-weight-bold">{{ $t('contact.findUs.title') }}</h2>
			<p class="text-info white--text">{{ $t('contact.findUs.info') }}</p>
			<iframe
				width="450"
				height="290"
				frameborder="0"
				class="iframe"
				title="Paris"
				src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJD7fiBh9u5kcRYJSMaMOCCwQ&key=AIzaSyAT_fVMijnruIs2Xw8Z0Ztj_5sNTk77aoo"
				allowfullscreen
			/>
		</v-layout>
		<AppContactForm class="pa-4" />
		<div class="pa-4">
			<h2 class="white--text headline mb-2 font-weight-bold">{{ $t('contact.about.title') }}</h2>
			<p class="text-info white--text">{{ $t('contact.about.info1') }}</p>
			<i18n
				path="contact.about.info2.path"
				class="text-info white--text"
				tag="p"
			>
				<strong place="first">{{ $t('contact.about.info2.places.first') }}</strong>
				<strong place="second">{{ $t('contact.about.info2.places.second') }}</strong>
				<strong place="third">{{ $t('contact.about.info2.places.third') }}</strong>
				<strong place="fourth">{{ $t('contact.about.info2.places.fourth') }}</strong>
			</i18n>
			<p class="text-info white--text font-italic">{{ $t('contact.about.info3') }}</p>
			<v-btn
				icon
				class="logo-btn"
				href="https://vuejs.org/"
			>
				<v-layout
					class="logo"
					align-center
					justify-center
				>
					<img
						:alt="$t('contact.about.logos.vuejs')"
						src="/img/logos/vuejs.svg"
					>
				</v-layout>
			</v-btn>
			<v-btn
				icon
				class="logo-btn"
				href="https://vuetifyjs.com/en/"
			>
				<v-layout
					class="logo"
					align-center
					justify-center
				>
					<img
						:alt="$t('contact.about.logos.vuetify')"
						src="/img/logos/vuetify.svg"
					>
				</v-layout>
			</v-btn>
			<v-btn
				icon
				class="logo-btn more-padding"
				href="https://github.com/typicode/json-server"
			>
				<v-layout
					class="logo"
					align-center
					justify-center
				>
					<img
						:alt="$t('contact.about.logos.jsonServer')"
						src="/img/logos/json.svg"
					>
				</v-layout>
			</v-btn>
		</div>
	</v-layout>
</template>

<script lang="ts">
	import Vue from 'vue';

	import AppContactForm from './ContactForm.vue';

	export default Vue.extend({
		name: 'AppContact',
		components: {
			AppContactForm
		}
	});
</script>

<style lang="scss" scoped>
	.contact {
		display: grid;
		grid-gap: 32px;
		background: #39545f;
		grid-template-columns: repeat(auto-fit, minmax(250px, 700px));
		grid-auto-rows: minmax(300px, auto);
		justify-content: center;
	}

	.iframe {
		flex: 1;
		border: 0;
		width: 100%;
		height: auto;
		background: #fff;
		min-height: 320px;
	}

	.logo-btn {
		width: 80px;
		height: 80px;
		padding: 10px;
		padding-top: 13px;
		padding-bottom: 7px;
		border-radius: 50%;
		background: #23333b;

		&.more-padding {
			padding: 15px;
		}

		img {
			width: 100%;
			height: 100%;
		}
	}
</style>
