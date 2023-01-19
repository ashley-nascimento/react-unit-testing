import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from './List'

// test('sum', () => {
//     const { getByText } = render(<List />)

//     expect(getByText('Hello World!')).toBeInTheDocument()
// })

describe('List Component', () =>{
    it('should render list items', () => {
        const { getByText } = render(<List initialItems={['Ashley', 'Fernanda', 'Nascimento']}/>)
        
        expect(getByText('Ashley')).toBeInTheDocument()
        expect(getByText('Fernanda')).toBeInTheDocument()
        expect(getByText('Nascimento')).toBeInTheDocument()
    })
    it('should be able to add new item to the list', async() => {
        const { getByText, getByPlaceholderText, findByText, debug } = render(<List initialItems={[]}/>)

        const inputElement = getByPlaceholderText('Novo Item')
        const addButton = getByText('Adicionar')

        await userEvent.type(inputElement, 'Novo')

        await userEvent.click(addButton)
        
        //debug()
        
        //expect(await findByText('Novo')).toBeInTheDocument()

        await waitFor(() => {
            expect(getByText('Novo')).toBeInTheDocument()
        })
    })

    it('should be able to add remove item to the list', async() => {
        const { getByText, getAllByText, queryByText, debug } = render(<List initialItems={['Ashley']}/>)

        const removeButtons = getAllByText('Remover')

        await userEvent.click(removeButtons[0])
        
        //debug()
        
        // await waitForElementToBeRemoved(() => {
        //     return getByText('Ashley')
        // })

        await waitFor(() => {
            expect(queryByText('Ashley')).not.toBeInTheDocument()
        })
    })
})