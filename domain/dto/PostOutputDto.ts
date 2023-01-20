export interface PostOutputDto {
    uuid: string;
    slug: string;
    title: string;
    featureImage: string;
    excerpt: string;
    updatedAt: string;
    primaryAuthor: {
        name: string
    };
    tags: { name: string }[];
    canonicalUrl: string
    metaDescription: string,
    readingTime: number,
    html: string
}

