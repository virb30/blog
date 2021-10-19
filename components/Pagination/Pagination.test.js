import { createLocalVue, mount } from '@vue/test-utils';
import Pagination from './index.vue';
import PageButton from './PageButton.vue';

const localVue = createLocalVue();

describe('Pagination Component', () => {
	describe('render', () => {
		it('should render childs', () => {
			const wrapper = mount(Pagination, {
				propsData: {
					pagination: {
						page: 1,
						pages: 2,
						next: 2,
						prev: null,
					},
				},
			});

			const buttons = wrapper.findAll('button');

			expect(wrapper.html()).toMatchSnapshot();
			expect(buttons.length).toBe(4);
		});
	});

	describe('navigation', () => {
		it('should navigate to next page', async () => {
			const wrapper = mount(Pagination, {
				localVue,
				propsData: {
					pagination: {
						page: 1,
						pages: 2,
						next: 2,
						prev: null,
					},
				},
			});

			const toPage = jest.spyOn(wrapper.vm, 'toPage');

			const pageButton = wrapper.findAllComponents(PageButton);

			await pageButton.at(3).vm.$emit('click');
			expect(toPage).toHaveBeenCalledWith(2);
		});

		it('should not navigate', async () => {
			const wrapper = mount(Pagination, {
				localVue,
				propsData: {
					pagination: {
						page: 1,
						pages: 1,
						next: null,
						prev: null,
					},
				},
			});

			const toPage = jest.spyOn(wrapper.vm, 'toPage');

			const pageButton = wrapper.findAllComponents(PageButton);

			await pageButton.at(0).vm.$emit('click');
			expect(toPage).not.toHaveBeenCalled();

			await pageButton.at(2).vm.$emit('click');
			expect(toPage).not.toHaveBeenCalled();
		});

		it('should navigate to prev page', async () => {
			const wrapper = mount(Pagination, {
				localVue,
				propsData: {
					pagination: {
						page: 2,
						pages: 2,
						next: null,
						prev: 1,
					},
				},
			});

			const toPage = jest.spyOn(wrapper.vm, 'toPage');

			const pageButton = wrapper.findAllComponents(PageButton);

			await pageButton.at(0).vm.$emit('click');
			expect(toPage).toHaveBeenCalledWith(1);
		});

		it('should navigate to arbitrary page', async () => {
			const wrapper = mount(Pagination, {
				localVue,
				propsData: {
					pagination: {
						page: 1,
						pages: 3,
						next: 2,
						prev: null,
					},
				},
			});

			const toPage = jest.spyOn(wrapper.vm, 'toPage');

			const pageButton = wrapper.findAllComponents(PageButton);

			await pageButton.at(3).vm.$emit('click');
			expect(toPage).toHaveBeenCalledWith(3);
		});
	});
});
