import GhostContentAPI, { PostsOrPages, Params } from '@tryghost/content-api';

const api = new GhostContentAPI({
	url: process.env.NUXT_ENV_GHOST_URL || 'https://blog.viniboscoa.dev',
	key: process.env.NUXT_ENV_GHOST_KEY || '',
	version: 'v3',
});

export async function getPosts (params?: Params): Promise<PostsOrPages> {
	const limit = params?.limit ?? 'all';

	return await api.posts.browse({
		limit,
	});
}

export async function getPostBySlug (slug: string) {
	return await api.posts
		.read({
			slug,
		})
		.catch((err) => {
			console.error(err);
		});
}
