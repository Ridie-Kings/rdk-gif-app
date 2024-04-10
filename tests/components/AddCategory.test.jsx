import { fireEvent, render, screen } from '@testing-library/react'
import AddCategory from '../../src/components/AddCategory'
import PropTypes from 'prop-types'

describe('Pruebas en AddCategory', () => {
    test('should change the value of the text input', () => {
        render(<AddCategory onNewCategory={() => { }} />)
        // screen.debug()
        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target: { value: 'Shanks' } })
        expect(input.value).toBe('Shanks')
    })

    test('should call onNewCategory if input has a value', () => {

        const inputValue = 'Shanks'
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)
        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })

    test('should not call onNewCategory if input is empty', () => {
        const onNewCategory2 = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory2} />)

        const form = screen.getByRole('form')
        fireEvent.submit(form)
        expect(onNewCategory2).not.toHaveBeenCalled()
    })



})

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
