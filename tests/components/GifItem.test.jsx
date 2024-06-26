import { render, screen } from "@testing-library/react"
import GifItem from "../../src/components/GifItem"

describe('Prueba en Gif item', () => {
    const title = 'One Piece'
    const url = 'https://onepiece.rdk.app/'

    test('should match the snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

    test('should show the image with the url and alt', () => {
        render(<GifItem title={title} url={url} />)

        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('should show the title at the component', () => {
        render(<GifItem title={title} url={url} />)

        expect(screen.getByText(title)).toBeTruthy()
    })



})
