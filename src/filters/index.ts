import Vue from 'vue';

const toEuros = (value: number): string => {
	return `${value.toFixed(2)}€`;
};

export default Vue.filter('eur', toEuros);
