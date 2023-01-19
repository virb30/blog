import { mount, RouterLinkStub, shallowMount } from '@vue/test-utils';
import { describe, expect, it, test } from 'vitest';
import Post from '../../domain/entity/Post';
import ArticleComponent from './index.vue'


describe('Article Component', () => {
    it('should render post card', () => {

        const post = new Post(
            'post-id',
            'post-slug',
            'Post Title',
            '',
            'post test',
            new Date('2023-01-01T10:34:21')
        )
        post.addTag('Teste')
        post.addTag('Nuxt')
        post.setAuthor('John Doe')

        const wrapper = mount(ArticleComponent, {
            global: {
                stubs: {
                    NuxtLink: RouterLinkStub
                }
            },
            props: {
                post
            }
        });
        expect(wrapper.get('h3').text()).toBe('Post Title')
        expect(wrapper.html()).toMatchSnapshot();
    });
});
