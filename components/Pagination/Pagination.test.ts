import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Pagination from './index.vue';
import PageButton from './PageButton.vue';

describe('Pagination Component', () => {
    describe('render', () => {
        it('should render childs', () => {
            const wrapper = mount(Pagination, {
                global: {
                    stubs: {
                        'font-awesome-icon': true
                    }
                },
                props: {
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
                global: {
                    stubs: {
                        'font-awesome-icon': true
                    }
                },
                props: {
                    pagination: {
                        page: 1,
                        pages: 2,
                        next: 2,
                        prev: null,
                    },
                },
            });

            const pageButtons = wrapper.findAllComponents(PageButton);

            await pageButtons?.at(3)?.trigger('click')

            await wrapper.vm.$nextTick()

            expect(wrapper.emitted()['change-page'][0]).toEqual([2])
        });

        it('should not navigate', async () => {
            const wrapper = mount(Pagination, {
                global: {
                    stubs: {
                        'font-awesome-icon': true
                    }
                },
                props: {
                    pagination: {
                        page: 1,
                        pages: 1,
                        next: null,
                        prev: null,
                    },
                },
            });

            const pageButtons = wrapper.findAllComponents(PageButton);

            await pageButtons?.at(0)?.trigger('click');
            await wrapper.vm.$nextTick()
            expect(wrapper.emitted()['change-page']).toBeUndefined();

            await pageButtons?.at(2)?.trigger('click');
            await wrapper.vm.$nextTick()
            expect(wrapper.emitted()['change-page']).toBeUndefined();
        });

        it('should navigate to prev page', async () => {
            const wrapper = mount(Pagination, {
                global: {
                    stubs: {
                        'font-awesome-icon': true
                    }
                },
                props: {
                    pagination: {
                        page: 2,
                        pages: 2,
                        next: null,
                        prev: 1,
                    },
                },
            });

            const pageButtons = wrapper.findAllComponents(PageButton);

            await pageButtons?.at(0)?.trigger('click');
            await wrapper.vm.$nextTick()
            expect(wrapper.emitted()['change-page'][0]).toEqual([1]);
        });

        it('should navigate to arbitrary page', async () => {
            const wrapper = mount(Pagination, {
                global: {
                    stubs: {
                        'font-awesome-icon': true
                    }
                },
                props: {
                    pagination: {
                        page: 1,
                        pages: 3,
                        next: 2,
                        prev: null,
                    },
                },
            });

            const toPage = vi.spyOn(wrapper.vm, 'toPage');

            const pageButtons = wrapper.findAllComponents(PageButton);

            await pageButtons?.at(3)?.trigger('click');
            await wrapper.vm.$nextTick()
            expect(wrapper.emitted()['change-page'][0]).toEqual([3]);
        });
    });
});
