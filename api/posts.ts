import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
	url: 'https://blog.viniboscoa.dev',
	key: 'a2d5da77d48c913e371f1f1805',
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
