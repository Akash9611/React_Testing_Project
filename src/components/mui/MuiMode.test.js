import { render, screen } from '@testing-library/react';
import AppProvider from '../../provider/app-provider';
import MuiMode from './MuiMode';

describe('MuiMode Component', () => {
    test('render test correctly', () => {
        render(<MuiMode />, { wrapper: AppProvider }); // method-1] if component is wrapped into the AppProvider we should have use this type of wrapper option to run the tests, if not used then test will get failed
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toHaveTextContent("dark mode");
    })
})