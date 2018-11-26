<template>
	<v-layout
		column
		class="cart pa-5 ctn"
	>
		<v-layout
			v-if="products.length > 0"
			column
			justify-space-between
			class="sub-ctn px-5 py-4 white"
		>
			<div>
				<h2 class="section-title display-2 primary--text">Votre panier</h2>
				<p class="subtitle title font-weight-regular mt-3">Résumé des articles ajoutés à votre panier.</p>
				<v-alert
					v-if="checkoutStatus === 'failed' && products.length || checkoutError"
					:value="true"
					type="error"
					transition="scale-transition"
				>
					{{ checkoutStatus }} {{ checkoutError }}
				</v-alert>
				<v-data-table
					:headers="headers"
					:items="products"
					hide-actions
					class="mt-5"
				>
					<template
						slot="items"
						slot-scope="props"
					>
						<td class="product-img-ctn">
							<img
								:src="`http://localhost:3000/img/pastry/${props.item.image}`"
								class="product-img"
							>
							<span class="product-title ml-2">{{ props.item.name }}</span>
						</td>
						<td>{{ props.item.price | eur }}</td>
						<td>{{ props.item.quantity }}</td>
						<td>{{ props.item.price * props.item.quantity | eur }}</td>
					</template>
					<template slot="footer">
						<td
							colspan="100%"
							class="text-xs-right"
						>
							<strong>Total : {{ total | eur }}</strong>
						</td>
					</template>
				</v-data-table>
			</div>
			<v-btn
				:disabled="!products.length"
				large
				flat
				color="primary"
				class="ma-0 checkout-btn"
				@click="checkout(products)"
			>Checkout</v-btn>
		</v-layout>
	</v-layout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { mapActions, mapGetters } from 'vuex';

	export default Vue.extend({
		data(): any {
			return {
				headers: [
					{
						text: 'Produit',
						value: 'name'
					},
					{
						text: 'Prix à l\'unité',
						value: 'unit'
					},
					{
						text: 'Quantité',
						value: 'quantity'
					},
					{
						text: 'Total',
						value: 'total'
					}
				]
			};
		},
		computed: {
			...mapGetters({
				products: 'cartProducts',
				findError: 'findError'
			}),
			checkoutError(): any {
				return this.findError('checkout');
			},
			checkoutStatus(): any {
				return this.$store.state.cart.lastCheckout;
			},
			total(): any {
				return this.products.reduce((total: any, p: any) => {
					return total + p.price * p.quantity;
				}, 0);
			}
		},
		beforeDestroy() {
			this.clearLastCheckout();
		},
		methods: {
			...mapActions([
				'checkout',
				'clearLastCheckout'
			])
		}
	});
</script>

<style lang="scss" scoped>
	.cart {
		&::after {
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			content: '';
			opacity: .05;
			position: absolute;
			background: no-repeat url('../assets/background-draw.jpg') 100% / cover;
		}

		> div {
			z-index: 1;
			box-shadow: 0px 2px 35px 0px rgba(0, 0, 0, .2);
		}

		& /deep/ {
			.product-img-ctn {
				height: auto;
				display: flex;
				flex-wrap: wrap;
				padding-top: 10px;
				align-items: center;
				padding-bottom: 10px;

				.product-title {
					text-transform: capitalize;
				}
			}

			.product-img {
				width: 50px;
				height: 50px;
				object-fit: cover;
			}
		}
	}

	.checkout-btn {
		align-self: flex-end;
	}
</style>
