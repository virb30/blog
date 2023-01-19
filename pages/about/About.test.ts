import { mount } from "@vue/test-utils";
import Index from './index.vue';
import { setup } from "@nuxt/test-utils";
import { describe, expect, it } from "vitest";

describe('About Page', async () => {
    await setup({

    })

    it('should render childs', () => {
        const wrapper = mount(Index, {
            stubs: {
                Profile: true,
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    // describe('Meta info', () => {
    //     it('should have a meta title', () => {
    //         const wrapper = mount(Index, {
    //             stubs: {
    //                 Profile: true,
    //             }
    //         });

    //         const expected = 'Sobre | viniboscoa.dev';

    //         const meta = wrapper.vm.$meta().refresh();

    //         expect(meta.metaInfo.title).toBe(expected);
    //     });
    // });
});
