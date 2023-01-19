export interface Tag {
    name: string;
}

interface PrimaryAuthor {
    name: string
}

export default class Post {
    readonly tags: Tag[] = []
    readonly primaryAuthor: PrimaryAuthor = { name: '' }
    readonly featureImage: string = ''

    constructor(
        readonly uuid: string,
        readonly slug: string,
        readonly title: string,
        featureImage?: string | null,
        readonly excerpt?: string,
        readonly updatedAt: Date = new Date()) {

        this.featureImage = featureImage ? featureImage : ''
    }

    public addTag(name?: string) {
        if (name) {
            this.tags.push({ name })
        }
    }

    public setAuthor(name?: string) {
        this.primaryAuthor.name = name || ''
    }
}