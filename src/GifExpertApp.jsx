import { useState } from "react"
import AddCategory from "./componentes/AddCategory"
import GifGrid from "./componentes/GifGrid"

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hunter x Hunter'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        // TODO: hacer la validacion para que no se pueda poner el mismo dato con capitalización diferente

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

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
