import { PostOutputDto } from '../../domain/dto/PostOutputDto';
import { BlogApi, } from '../utils/api';

export default defineEventHandler((event: any): Promise<PostOutputDto | void> => {
    const config = useRuntimeConfig()
    const api = new BlogApi(config.ghostUrl, config.ghostKey)

    const { slug } = getQuery(event)

    return api.getPost(slug)
})