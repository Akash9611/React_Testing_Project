import { render, screen } from '@testing-library/react';
import Applications from './Applications';

describe('Application', () => {
    //!Applications Code 1
    // test('All fileds', () => {
    //     render(<Applications />);
    //     const nameElement = screen.getByRole('textbox'); //checking name text input is present
    //     expect(nameElement).toBeInTheDocument();

    //     const dropdownElement = screen.getByRole('combobox'); // checking job-locations dropdown list is present
    //     expect(dropdownElement).toBeInTheDocument();

    //     const checkboxElement = screen.getByRole('checkbox'); // checking terms checkbox input is present
    //     expect(checkboxElement).toBeInTheDocument();

    //     const buttonElement = screen.getByRole('button'); // checking button is present
    //     expect(buttonElement).toBeInTheDocument();
    // })

    //!Applications Code 2
    test('All fileds', () => {
        render(<Applications />);
        
        //?getByRole Options
        //todo: 1] 'name' option
        // //!h1
        // const headingElement1 = screen.getByRole('heading', { name: 'Applications Submit Form' });//if we have a multiple headings tag then we should have to define the 'name' option(else test will fail) in the getByRole() and pass the text inside of the heading to the option;
        // expect(headingElement1).toBeInTheDocument();

        // //!h2
        // const headingElement2 = screen.getByRole('heading', {name:'Sections'});
        // expect(headingElement2).toBeInTheDocument();

        //todo: 2]'level' option
        //h1
        const headingElement1 = screen.getByRole('heading', { level:1 });//if we have a multiple headings tag then we should have to define the 'level' option(else test will fail) in the getByRole() and level as number(level option accept only 6 level);
        expect(headingElement1).toBeInTheDocument();

        //h2
        const headingElement2 = screen.getByRole('heading', {level:2});
        expect(headingElement2).toBeInTheDocument();

        //Name input
        const nameElement = screen.getByRole('textbox', { name: 'Name' }); //if we have a multiple same text input filed then we should have to define the 'name' option(else test will fail) in the getByRole() and pass the carousing/binding label text as name 
        expect(nameElement).toBeInTheDocument();

        //Bio input
        const bioElement = screen.getByRole('textbox', { name: 'Bio' });
        expect(bioElement).toBeInTheDocument();


        const dropdownElement = screen.getByRole('combobox'); // checking job-locations dropdown list is present
        expect(dropdownElement).toBeInTheDocument();

        const checkboxElement = screen.getByRole('checkbox'); // checking terms checkbox input is present
        expect(checkboxElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button'); // checking button is present
        expect(buttonElement).toBeInTheDocument();
    })

})