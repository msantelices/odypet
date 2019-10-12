import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/directorio',
			name: 'directorio',
			component: () => import('./views/List.vue')
		},
		{
			path: '/detalle',
			name: 'detalle',
			component: () => import('./views/Detail.vue')
		},
		{
			path: '/mapa',
			name: 'mapa',
			component: () => import('./views/Map.vue')
		},
		{
			path: '/contacto',
			name: 'contacto',
			component: () => import('./views/Contact.vue')
		}
		
	]
})
