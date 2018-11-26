import shop from '@/services/shop';

const state = {
	added: [],
	lastCheckout: null
};

const actions = {
	// The first argument is the vuex store, but we're using only the
	// dispatch function, which applies a mutation to the store,
	// and the current state of the store
	checkout({ commit, dispatch, state }: any, products: any) {
		const savedCartItems = [...state.added];

		commit('checkoutRequest');
		shop.buyProducts(
			products,
			() => {
				commit('checkoutSuccessful');
				dispatch('deleteError', 'checkout');
			},
			(error: any) => {
				commit('checkoutFailure', savedCartItems);
				dispatch('addError', {
					name: 'checkout',
					notify: false,
					error: error.data
				});
			}
		);
	},
	clearLastCheckout({ commit }: any) {
		commit('checkoutRequest');
	}
};

const mutations = {
	addToCart(state: any, productId: number) {
		state.lastCheckout = null;
		const record = state.added.find((p: any) => p.id === productId);

		if (!record) {
			state.added.push({
				id: productId,
				quantity: 1
			});
		} else {
			record.quantity++;
		}
	},
	checkoutRequest(state: any) {
		// clear cart
		state.added = [];
		state.lastCheckout = null;
	},
	checkoutSuccessful(state: any) {
		state.lastCheckout = 'successful';
	},
	checkoutFailure(state: any, savedCartItems: any) {
		// rollback to the cart saved before sending the request
		state.added = savedCartItems;
		state.lastCheckout = 'failed';
	}
};

const getters = {
	cartProducts(state: any, getters: any, rootState: any) {
		return state.added.map(({ id, quantity }: any) => {
			const product = rootState.products.all.find((p: any) => p.id === id);

			return {
				name: product.name,
				price: product.price,
				image: product.image,
				id,
				quantity
			};
		});
	},
	cartCount(state: any) {
		let totalCount = 0;

		state.added.forEach(({ quantity }: any) => {
			totalCount += quantity;
		});

		return totalCount;
	}
};

const cart = {
	state,
	actions,
	mutations,
	getters
};

export default cart;
