import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import { state as BlogState } from '@/store/Blog/index';
import BlogGetters from '@/store/Blog/getters';
import BlogMutations from '@/store/Blog/mutations';

export const setupLocalVueStore = () => {
	const localVue = createLocalVue();
	localVue.use(Vuex);

	const setupModules = () => ({
		modules: {
			Blog: {
				namespaced: true,
				state: BlogState(),
				getters: BlogGetters,
				mutations: BlogMutations,
			},
		},
	});

	const configureStore = (blogState = {}) => {
		const storeConfig = setupModules();
		storeConfig.modules.Blog.state = {
			...storeConfig.modules.Blog.state,
			...blogState,
		};

		const store = new Vuex.Store(storeConfig);
		return store;
	};

	return {
		localVue,
		configureStore,
	};
};
