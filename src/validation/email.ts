import i18n from '@/i18n';

const errorMessages = {
	default: i18n.t('validation.email.default')
};

const email = (value: string) => /.+@.+/.test(value) || errorMessages.default;

export default email;
