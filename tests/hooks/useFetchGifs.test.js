import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";
import {renderHook, waitFor} from "@testing-library/react";

describe('Pruebas en el hook useFetchGifs', () => {
    test('debde de regresar el estado inical', () => {

        const {result} = renderHook(() => useFetchGifs('OnePunch'))
        const {images, isLoading} = result.current
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })

    test('debde de retornar un arreglo de imagenes y isLoading en false', async() => {

        const {result} = renderHook( () => useFetchGifs('OnePunch'))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        const {images, isLoading} = result.current
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })

})
