//!Method 1 
// import { render, screen } from '@testing-library/react';
// import AppProvider from '../../provider/app-provider';
// import MuiMode from './MuiMode';

// describe('MuiMode Component', () => {
//     test('render test correctly', () => {
//         render(<MuiMode />, { wrapper: AppProvider }); //todo: method-1] if component is wrapped into the AppProvider we should have use this type of wrapper option to run the tests, if not used then test will get failed
//         const headingElement = screen.getByRole('heading');
//         expect(headingElement).toHaveTextContent("dark mode");
//     })

// })

//! Method 2- Test getting AppProvider predefined to wrapper with test and options from ['test-utils.js'] file 
import { render, screen } from '../../test-utils' //make sure to import methods from test-utils.js file
import MuiMode from './MuiMode';

describe('MuiMode Component', () => {
    test('render test correctly', () => {
        render(<MuiMode />); // method-2]getting/importing render and wrapper with AppProvider from the 'test-utils.js' file
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toHaveTextContent("dark mode");
    })


})