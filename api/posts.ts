import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
	url: process.env.GHOST_URL || 'https://blog.viniboscoa.dev',
	key: process.env.GHOST_KEY || '',
	version: 'v3',
});

export async function getPosts () {
	return await api.posts
		.browse({
			limit: 'all',
		})
		.catch((err) => {
			console.error(err);
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
