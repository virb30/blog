import { PostOutputDto } from '../../domain/dto/PostOutputDto';
import { BlogApi, } from '../../utils/api';

export default defineEventHandler(async (event: any): Promise<PostOutputDto> => {
    const config = useRuntimeConfig()
    const api = new BlogApi(config.ghostUrl, config.ghostKey)

    const { slug } = getQuery(event)

    const post = await api.getPost(slug)

    return post
})