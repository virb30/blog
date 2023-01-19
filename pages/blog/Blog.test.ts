import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from "@vue/test-utils";
import Index from './index.vue';
import { useBlogStore } from '~~/stores/blog';
import { createTestingPinia } from '@pinia/testing';
import { setup } from '@nuxt/test-utils'

describe('Blog Page', async () => {
    await setup({
    })

    let store = useBlogStore();
    let config: any;

    beforeEach(() => {
        config = {
            stubs: {
                Article: true,
                Pagination: true,
            },
            plugins: [
                createTestingPinia()
            ]
        };

    });

    it('should render childs', () => {
        const wrapper = mount(Index, config);

        expect(wrapper.html()).toMatchSnapshot();
    });

    // describe('Meta info', () => {
    //     it('should have a meta title', () => {
    //         const wrapper = mount(Index, config);

    //         const expected = 'Blog | viniboscoa.dev';

    //         const meta = wrapper.vm.$meta().refresh();

    //         expect(meta.metaInfo.title).toBe(expected);
    //     });
    // });
});
