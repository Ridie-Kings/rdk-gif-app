import { render, screen } from "@testing-library/react"
import GifGrid from "../../src/components/GifGrid"
import useFetchGifs from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => {
    const category = 'one punch'

    test('should show loading on init', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category} />)

        const loaderElement = screen.getByTestId('loader')
        expect(loaderElement).toBeTruthy()
        expect(screen.getByText(category)).toBeTruthy()

    })

    test('should show items when images are loaded', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'One Punch',
                url: 'https://one-punch.com'
            },
            {
                id: 'DEF',
                title: 'Hunter x Hunter',
                url: 'https://hunter-hunter.com'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category} />)

        screen.debug()
        expect(screen.getAllByRole('img').length).toBe(2)
    })


})
