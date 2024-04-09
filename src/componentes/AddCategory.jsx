import { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ onNewCategory }) => {

    console.log('>>> AddCategory render')

    const [inputValue, setInputValue] = useState('One piece')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const newValue = inputValue.trim()

        if (newValue.length < 1) return

        onNewCategory(newValue);
        setInputValue('')
    }


    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func
}

export default AddCategory
