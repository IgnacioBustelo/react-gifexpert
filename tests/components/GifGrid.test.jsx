import {render, screen} from "@testing-library/react";
import {GifGrid} from "../../src/components/index.js";
import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";
import * as assert from "assert";

jest.mock('../../src/hooks/useFetchGifs.js')
describe('pruebas sobre GifGrid', () => {

        const category = 'one punch'

        test('debe de mostrar el loading incialmente', () => {

            useFetchGifs.mockReturnValue({
                images: [],
                isLoading: true
            })
            render(<GifGrid category={category}/>)
            expect(screen.getByText('Cargando...')).toBeTruthy();
            expect(screen.getByText(category)).toBeTruthy();
        })

        test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

            const gifs = [{
                id: 'abc',
                title: 'Saitama',
                url: 'https://saraza.com'
            },
                {
                    id: 'abc2',
                    title: 'Saitama2',
                    url: 'https://saraza2.com'
                }]


            useFetchGifs.mockReturnValue({
                images: gifs,
                isLoading: false
            })


            render(<GifGrid category={category}/>)
            expect(screen.getAllByRole('img').length).toBe(gifs.length);
            screen.debug()
        })

    }
)

