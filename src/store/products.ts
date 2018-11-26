import shop from '@/services/shop';

const state = {
	all: []
};

const actions = {
	addToCart({ commit }: any, product: any) {
		commit('addToCart', product.id);
	},
	setAllProducts({ commit, dispatch }: any) {
		shop.getProducts(
			(products: any) => {
				commit('recieveProducts', products);
				dispatch('deleteError', 'shop');
			},
			(error: any) => dispatch('addError', {
				name: 'shop',
				notify: false,
				error: error.data
			})
		);
	}
};

const mutations = {
	recieveProducts(state: any, products: any) {
		state.all = products;
	},
	addToCart(state: any, productId: number) {
		state.all.find((p: any) => p.id === productId).inventory--;
	}
};

const getters = {
	allProducts(state: any) {
		return state.all;
	},
	findProduct: (state: any) => (id: number) => {
		return state.all.find((p: any) => p.id === id) || {};
	}
};

const products = {
	state,
	actions,
	mutations,
	getters
};

export default products;
