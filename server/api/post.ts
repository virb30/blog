import Post from '~~/domain/entity/Post';
import { BlogApi, } from '../utils/api';

export default defineEventHandler((event): Promise<Post> => {
    const config = useRuntimeConfig()
    const api = new BlogApi(config.ghostUrl, config.ghostKey)

    const { slug } = getQuery(event)

    return api.getPost(slug)
})