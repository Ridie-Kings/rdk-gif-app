import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hunter x Hunter'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        // TODO: hacer la validacion para que no se pueda poner el mismo dato con capitalización diferente

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>RDK-Gifs</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />



            {
                categories.map((category) =>
                (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}

export default GifExpertApp
