//! #### Learning to use about USER INTERACTION (how the component is working when user perform some action on page) using user-event library

import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import Count from './Count';

//! 1]  Pointer Interaction /Mouse Interaction [click(), dblClick(), tripleClick(), hover(), unhover()] 
describe('Count Component', () => {
    test('render correctly', () => {
        render(<Count />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument();

        const incrementButton = screen.getByRole('button', { name: 'Increment' });
        expect(incrementButton).toBeInTheDocument();
    })

    //Testing the initial state values of count is 0 and is reflecting correctly in heading element
    test('render count of 0', () => {
        render(<Count />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent("0");
    })

    //Testing with user interaction with user instance. If user click on button then the count will increment 0 to 1
    test('render count of 1 after user clicking the increment button', async () => {
        user.setup(); //creating user instance
        render(<Count />);
        const incrementButton = screen.getByRole('button', { name: 'Increment' });
        await user.click(incrementButton); //when user click increment button
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent("1")
    })

    test('render count of 2 after user clicking the increment button twice', async () => {
        user.setup(); //creating user instance
        render(<Count />);
        const incrementButton = screen.getByRole('button', { name: 'Increment' });
        await user.dblClick(incrementButton);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent("2")
    })

//! 2]Keyboard Interaction

})

