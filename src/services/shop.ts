import axios from '@/plugins/axios';
import Raven from 'raven-js';

const shop = {
	getProducts(cb: (args: any) => void, errorCb: any) {
		axios.get('/products')
			.then((response) => {
				cb(response.data);
			})
			.catch((error) => Raven.captureException(error)
		);
	},
	buyProducts(products: any, cb: any, errorCb: any) {
		setTimeout(() => {
			axios.post('/commands', {
				date: Date.now(),
				products
			})
				.then((response) => {
					cb(response.data);
				})
				.catch((error) => {
					errorCb(error);
			});
		}, 100);
	}
};

export default shop;
