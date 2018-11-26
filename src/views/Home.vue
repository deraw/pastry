<template>
	<div>
		<AppHeader />
		<DatePicker />
		<section
			v-if="false"
			id="products"
			class="pa-5 ctn"
		>
			<div class="sub-ctn">
				<h2 class="section-title display-2 primary--text">Boutique en ligne</h2>
				<p class="subtitle title font-weight-regular mt-3">
					Bienvenue sur la boutique en ligne de la pâtisserie Broussard.<br>
					Sur ce site, vous pourrez commander des classiques de la pâtisserie française ainsi que des des gâteaux plus modernes mais toujours aussi délicieux. <b>Bon appétit !</b>
				</p>
				<ul
					v-if="allProducts.length"
					class="products-ctn pa-0 mt-4"
				>
					<v-layout
						v-for="(p, index) in allProducts"
						:key="index"
						xs2
						tag="li"
						class="product"
					>
						<v-card>
							<v-card-media
								:src="`http://localhost:3000/img/pastry/${p.image}`"
								height="250"
							/>
							<v-layout
								column
								class="pa-3"
							>
								<v-card-title class="pa-0 pb-1">
									<span class="title">{{ p.name }}</span>
								</v-card-title>
								<v-spacer />
								<v-card-text class="pa-0 primary--text">
									<span class="price">{{ p.price | eur }}</span>
								</v-card-text>
							</v-layout>
							<v-btn
								dark
								flat
								color="info"
								class="ma-0 add-button"
								@click="addToCart(p)"
							>Add to cart</v-btn>
						</v-card>
					</v-layout>
				</ul>
				<v-alert
					v-else-if="shopError"
					:value="true"
					type="error"
					transition="scale-transition"
				>
					Une erreur est survenue lors de l'affichage des produits, veuillez réessayer.
				</v-alert>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { mapGetters, mapActions } from 'vuex';

	import AppHeader from '@/components/Header.vue';

	export default Vue.extend({
		name: 'Home',
		components: {
			AppHeader
		},
		computed: {
			...mapGetters([
				'allProducts',
				'findError'
			]),
			shopError(): object {
				return this.findError('shop');
			}
		},
		mounted() {
			// this.setAllProducts();
		},
		methods: {
			...mapActions([
				'setAllProducts',
				'addToCart'
			])
		}
	});
</script>

<style lang="scss" scoped>
	.products-ctn {
		display: grid;
		grid-gap: 32px;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-auto-rows: minmax(300px, auto);
	}

	.product {
		width: 100%;
		margin: 0 auto;
		min-width: 250px;
	}

	.v-card {
		width: 100%;
		display: flex;
		flex-direction: column;
		transition: background .25s;
		box-shadow: 0px 2px 35px 0px rgba(0, 0, 0, .2);

		& /deep/ .v-card__media__background {
			transition: .25s;
		}

		&:hover /deep/ .v-card__media__background {
			transform: scale(1.1);
			filter: blur(2px);
		}

		.v-card__media {
			transition: .25s;
			overflow: hidden;
			border-bottom: 2px solid #d1221a;
		}

		.v-card__title {
			.title::first-letter {
				text-transform: uppercase;
			}
		}

		.v-card__text {
			text-align: right;
		}
	}

	.subtitle {
		width: 1300px;
		line-height: 1.3 !important;
	}

	.add-button {
		border-top: 1px solid #f6f7f9;
	}
</style>
