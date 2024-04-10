import { getGifs } from "../../src/helpers/getGif"

describe('getGif test', () => {
    test('should return an array', async () => {

        const gifs = await getGifs('One piece')
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })

})
