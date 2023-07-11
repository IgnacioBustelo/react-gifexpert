import {render, screen} from "@testing-library/react";
import {GifItem} from "../../src/components/index.js";

describe('Pruebas en GifItem', () => {

    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'
    test('Debe ser igual al snapshot', () => {

        const {container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot()
    })

    test('debe de mostart la imagen con el url y el alt indicado', () => {
        render(<GifItem title={title} url={url}/>)
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('debe de mostrar el titulo del componente', () => {
        render(<GifItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy()

    })


})
