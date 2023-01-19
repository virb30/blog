import { BlogApi, PaginatedPosts } from '../utils/api';


export default defineEventHandler((event): Promise<PaginatedPosts> => {
    const config = useRuntimeConfig()
    const api = new BlogApi(config.ghostUrl, config.ghostKey)

    const params = { ...getQuery(event) }

    params.limit = params?.limit ?? 15;

    return api.getPosts(params)
})
