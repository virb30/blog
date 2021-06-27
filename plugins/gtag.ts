import { Context } from '@nuxt/types';
import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default function ({ $config }: Context) {
	Vue.use(VueGtag, {
		config: { id: $config.googleAnalytics },
	});
}
