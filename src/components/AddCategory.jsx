import {useState} from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const input = inputValue.trim()
        if (input.length <= 1) return;
        onNewCategory(input.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type={"text"}
                placeholder={"Buscar Gifs"}
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
