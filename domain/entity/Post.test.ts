import { describe, expect, it } from "vitest";
import Post from "./Post";

describe("Post Entity", () => {

    it("Should create a Post without tags and empty author", () => {

        const post = new Post(
            'a',
            'a',
            'test',
            '',
            'post test',
            new Date('2023-01-01T10:34:21')
        )

        expect(post).toBeInstanceOf(Post)
        expect(post.tags).toHaveLength(0)
        expect(post.primaryAuthor).toEqual({ name: '' })
    })

    it("Should create a Post and add tags", () => {

        const post = new Post(
            'a',
            'a',
            'test',
            '',
            'post test',
            new Date('2023-01-01T10:34:21')
        )

        post.addTag('tag 1')
        post.addTag('tag 2')
        post.addTag('tag 3')

        expect(post).toBeInstanceOf(Post)
        expect(post.tags).toHaveLength(3)
        expect(post.tags[0]).toEqual({ name: 'tag 1' })
    })

    it("Should create a Post and set author", () => {

        const post = new Post(
            'a',
            'a',
            'test',
            '',
            'post test',
            new Date('2023-01-01T10:34:21')
        )


        post.setAuthor('Author name')

        expect(post).toBeInstanceOf(Post)
        expect(post.tags).toHaveLength(0)
        expect(post.primaryAuthor).toEqual({ name: 'Author name' })
    })

})