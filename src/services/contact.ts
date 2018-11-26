import axios from '@/plugins/axios';
import Raven from 'raven-js';

const contact = {
	sendMail(name: string, email: string, message: string, cb: any, errorCb: any) {
		setTimeout(() => {
			axios.post('/messages', {
				date: Date.now(),
				name,
				email,
				message
			})
				.then((response) => cb(response.data))
				.catch((error) => {
					errorCb(error);
					Raven.captureException(error);
			});
		}, 100);
	}
};

export default contact;
