import { mount, RouterLinkStub } from "@vue/test-utils";
import { setup } from '@nuxt/test-utils'
import Index from './index.vue';
import { useBlogStore } from "~/stores/blog";
import { createTestingPinia } from "@pinia/testing";
import { beforeEach, describe, expect, it } from "vitest";

describe('Home Page', async () => {
    await setup({

    })

    let store = useBlogStore();
    let config: any;

    beforeEach(() => {
        config = {
            stubs: {
                Profile: true,
                FontAwesomeIcon: true,
                Logo: true,
                NuxtLink: RouterLinkStub,
            },
            plugins: [
                createTestingPinia()
            ],
        };

    });

    it('should render childs', () => {
        const wrapper = mount(Index, config);

        expect(wrapper.html()).toMatchSnapshot();
    });

    // describe('Meta info', () => {
    //     it('should have a meta title', () => {
    //         const wrapper = mount(Index, config);
    //         console.log(wrapper)

    //         const expected = 'Home | viniboscoa.dev';

    //         const meta = wrapper.vm.$meta().refresh();

    //         expect(meta.metaInfo.title).toBe(expected);
    //     });
    // });
});
