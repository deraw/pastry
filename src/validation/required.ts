import i18n from '@/i18n';

const errorMessages = {
	default: i18n.t('validation.required.default')
};

const required = (value: any) => !!value || errorMessages.default;

export default required;
