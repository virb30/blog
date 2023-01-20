import GhostContentAPI, { GhostAPI, Params, Tag } from '@tryghost/content-api';
import { PostOutputDto } from '~~/domain/dto/PostOutputDto';
import Post from '~~/domain/entity/Post';

interface Pagination {
    page: number;
    pages: number;
    prev: number | null;
    next: number | null;
}

export interface PaginatedPosts {
    posts: Post[],
    pagination: Pagination
}

export class BlogApi {

    private client: GhostAPI

    constructor(readonly baseUrl: 'https://blog.viniboscoa.dev', readonly key = '') {
        this.client = new GhostContentAPI({
            url: baseUrl,
            key,
            version: 'v4.41'
        })
    }

    async getPosts(params: Params): Promise<PaginatedPosts> {
        const limit = params.limit || 'all'

        const response = await this.client.posts.browse({
            ...params,
            include: ['tags', 'authors'],
            limit,
        });

        const pagination = response.meta.pagination

        const posts = response.map((postData) => {
            const updatedAt = postData.updated_at ? new Date(postData.updated_at) : new Date();
            const post = new Post(
                postData.uuid || '',
                postData.slug || '',
                postData.title || '',
                postData.feature_image,
                postData.excerpt,
                updatedAt
            )
            postData.tags?.forEach((tag: Tag) => {
                post.addTag(tag.name)
            })
            post.setAuthor(postData.primary_author?.name)
            return post
        })

        return { pagination, posts }
    }

    async getPost(slug: string): Promise<PostOutputDto> {
        const postData = await this.client.posts.read({
            slug,
        }, {
            include: ['tags', 'authors'],
        })

        if (!postData) {
            throw new Error('Post not found')
        }

        const updatedAt = postData.updated_at ?? '';
        const tags = postData.tags
            ? postData.tags?.map(({ name }) => ({ name: name || '' }))
                .filter(({ name }) => name != '') : []

        return {
            uuid: postData.uuid ?? '',
            slug: postData.slug ?? '',
            title: postData.title ?? '',
            featureImage: postData.feature_image ?? '',
            excerpt: postData.excerpt ?? '',
            updatedAt,
            tags,
            primaryAuthor: {
                name: postData.primary_author?.name ?? ''
            },
            metaDescription: postData.meta_description ?? '',
            canonicalUrl: postData.canonical_url ?? '',
            readingTime: postData.reading_time ?? 0,
            html: postData.html ?? ''
        }
    }
}