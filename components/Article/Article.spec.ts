import { mount } from '@vue/test-utils';
import Article from './index.vue';

describe('Article Component', () => {
	it('should render post card', () => {
		const wrapper = mount(Article, {
			propsData: {
				post: {
					uuid: 'post-id',
					slug: 'post-slug',
					title: 'Post Title',
					feature_image: '',
					tags: [
						{ name: 'Teste' },
						{ name: 'Nuxt' },
					],
					updated_at: new Date('2021-10-10'),
				},
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
