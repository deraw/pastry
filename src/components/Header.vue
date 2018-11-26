<template>
	<header class="header">
		<h1
			v-cloak
			class="main-title"
		>{{ $t('header.title') }}</h1>
		<v-img
			src="/img/background.jpg"
			lazy-src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAPABcDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAgEBQYH/8QAJRAAAQQBBAEEAwAAAAAAAAAAAQIDBBEFAAYSIQcTMUFRFCOR/8QAFgEBAQEAAAAAAAAAAAAAAAAABQQG/8QAHhEAAQQBBQAAAAAAAAAAAAAAAQADESECBBIxkfD/2gAMAwEAAhEDEQA/AEs2PGkZdz8LGYiRkZclxEYRmuw+24eKm1WnqyU0qxxIs+2u/eSYMPx3tKY3KYwczP4WPGgOSoUhSVBS+aBIVZ4LfSx6qCsg0XFceqGlP25vCfgJrOSx7xQ6wrmjtQo/dg2D82O9XW6PK24tyRGxkZXrFNgqdtZ5fKrPZ9+uRNH2rReLXESD7taLUPb4NFYTNY8sSFlQTTp9RP7As8SerP3o1GlzEqHar/ujVVI6wv/Z"
		/>
	</header>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'AppHeader'
	});
</script>

<style lang="scss">
	@font-face {
		font-family: 'EratoLight';
		src: url('/fonts/EratoLight.woff2') format('woff2'),
			url('/fonts/EratoLight.woff') format('woff');
		font-weight: normal;
		font-style: normal;
		font-display: fallback;
	}
</style>

<style lang="scss" scoped>
	.header {
		display: flex;
		flex: 1 0 auto;
		overflow: hidden;
		position: relative;
		min-height: 350px;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 64px - 10px); // viewport - toolbar - gap to see content

		.v-image {
			width: 100%;
			height: 100%;
			position: absolute;
		}
	}

	.main-title {
		z-index: 1;
		color: #fff;
		line-height: 1;
		font-weight: 400;
		position: relative;
		text-align: center;
		font-size: calc(4vw + 2rem);
		font-family: 'EratoLight', serif;
		text-shadow: 0 0 100px black, 0 0 100px black;

		&::after {
			left: 50%;
			width: 50%;
			content: '';
			height: 5px;
			bottom: calc(-1rem - 1vh);
			background: #fff;
			position: absolute;
			transform: translateX(-50%);
		}
	}
</style>
