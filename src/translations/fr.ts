// tslint:disable:max-line-length

const fr = {
	toolbar: {
		home: 'Accueil',
		cart: 'Panier'
	},
	header: {
		title: 'Pâtisserie Broussard'
	},
	contact: {
		findUs: {
			title: 'Nous trouver',
			info: 'Notre pâtisserie est basée à Paris. Nous pouvons donc livrer partout en Île-de-France, n\'hésitez pas à nous contacter pour toute livraison hors de cette zone géographique.'
		},
		about: {
			title: 'À propos',
			info1: 'Ce site a été développé dans le but de démontrer ce qu\'il est possible de faire avec la stack Vue.js, ainsi que d\'avoir des exemples concrets.',
			info2: {
				path: 'Cette stack a pour but de {first}, ou bien de {second}, d\'{third}, et de {fourth}.',
				places: {
					first: 'démarrer rapidement un nouveau projet',
					second: 's\'intégrer dans de l\'existant',
					third: 'être à jour avec les dernières nouveautés',
					fourth: 'mettre en place toutes les bonnes pratiques'
				}
			},
			info3: 'Technologies utilisées :',
			logos: {
				vuejs: 'Vue.js',
				vuetify: 'Vuetify',
				jsonServer: 'Json Server'
			}
		}
	},
	contactForm: {
		title: 'Nous contacter',
		info: 'Utilisez le formulaire ci-dessous pour nous envoyer un message en remplissant tous les champs.',
		fields: {
			name: 'Nom',
			email: 'E-mail',
			message: 'Message'
		},
		validation: {
			tooLong: 'Votre message ne doit pas excéder 5 000 caractères. Soyez concis !',
			tooShort: 'Votre message doit contenir au moins 20 caractères. N\'envoyer pas du vent !'
		},
		send: 'Envoyer',
		error: 'Il y a eu une erreur lors de l\'envoi de votre message, veuillez réesayer.',
		success: 'Votre message a bien été envoyé !'
	},
	footer: {
		year: '2018',
		name: 'Dylan Broussard'
	},
	langBtn: {
		label: 'Choix de la langue. Actuellement :'
	},
	notFound: {
		title: 'Page non trouvée',
		info: 'Oh non ! La page demandée n\'a pas été trouvée, veuillez nous en excuser.',
		btn: 'Revenir à la page d\'accueil'
	},
	validation: {
		email: {
			default: 'Votre email doit être valide.'
		},
		required: {
			default: 'Le champ est requis.'
		}
	}
};

export default fr;
