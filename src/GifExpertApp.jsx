import './styles.css'
import {AddCategory, GifGrid} from "./components";
import {useState} from "react";

export const GifExpertApp = () => {

    const [categories, setCategories,] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <div>GifExpertApp</div>
            <AddCategory
                onNewCategory={onAddCategory}
            />
            {categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}/>
                )
            )}
        </>
    )
}
