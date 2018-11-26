<template>
	<v-form
		ref="form"
		v-model="valid"
		lazy-validation
	>
		<h2 class="white--text headline mb-2 font-weight-bold">{{ $t('contactForm.title') }}</h2>
		<p class="text-info white--text">{{ $t('contactForm.info') }}</p>
		<v-text-field
			v-model="name"
			:rules="nameRules"
			:label="$t('contactForm.fields.name')"
			validate-on-blur
			color="#fff"
			class="mb-3"
			required
			dark
		/>
		<v-text-field
			v-model="email"
			:rules="emailRules"
			:label="$t('contactForm.fields.email')"
			validate-on-blur
			color="#fff"
			class="mb-3"
			required
			dark
		/>
		<v-textarea
			v-model="message"
			:rules="messageRules"
			:label="$t('contactForm.fields.message')"
			validate-on-blur
			auto-grow
			color="#fff"
			required
			dark
		/>
		<v-layout
			wrap
			align-center
			class="mt-3"
		>
			<v-btn
				:loading="status === 'pending'"
				class="ma-0 mr-3"
				@click="submit"
			>{{ $t('contactForm.send') }}</v-btn>

			<p
				v-if="status === 'error'"
				class="error--text ma-0"
			>{{ $t('contactForm.error') }}</p>
			<p
				v-if="status === 'success'"
				class="white--text ma-0"
			>{{ $t('contactForm.success') }}</p>
		</v-layout>
	</v-form>
</template>

<script lang="ts">
	import Vue from 'vue';

	import contact from '@/services/contact';

	import required from '@/validation/required';
	import email from '@/validation/email';

	export default Vue.extend({
		name: 'AppContactForm',
		data(): any {
			return {
				valid: false,
				name: '',
				nameRules: [
					required
				],
				email: '',
				emailRules: [
					required,
					email,
				],
				message: '',
				messageRules: [
					required,
					(value: any) => value.length < 5000 || this.$i18n.t('contactForm.validation.tooLong'),
					(value: any) => value.length > 20 || this.$i18n.t('contactForm.validation.tooShort')
				],
				status: 'initial'
			};
		},
		methods: {
			submit(): void {
				// Performs form validation
				if (this.$refs.form.validate()) {
					// If form is valid, send mail with callbacks
					this.status = 'pending';

					contact.sendMail(
						this.name,
						this.email,
						this.message,
						this.success,
						this.error
					);
				}
			},
			success() {
				this.$refs.form.reset();
				this.status = 'success';
			},
			error() {
				this.status = 'error';
			}
		}
	});
</script>
