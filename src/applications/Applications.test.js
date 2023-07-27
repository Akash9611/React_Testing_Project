import { render, screen } from '@testing-library/react';
import Applications from './Applications';

describe('Application', () => {
    test('All fileds', () => {
        render(<Applications />);
        const nameElement = screen.getByRole('textbox'); //checking name text input is present
        expect(nameElement).toBeInTheDocument();

        const dropdownElement = screen.getByRole('combobox'); // checking job-locations dropdown list is present
        expect(dropdownElement).toBeInTheDocument();

        const checkboxElement = screen.getByRole('checkbox'); // checking terms checkbox input is present
        expect(checkboxElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button'); // checking button is present
        expect(buttonElement).toBeInTheDocument();
    })

})