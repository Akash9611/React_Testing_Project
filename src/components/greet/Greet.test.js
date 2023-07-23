import { render, screen} from '@testing-library/react';
import Greet from './Greet';

//! Simple Testing Method
// test('greeting component test', () =>{
//     render(<Greet/>);
//     const testGreet = screen.getByText(/hello/i); // i - is for testing with string Case-insensitive 
//     expect(testGreet).toBeInTheDocument();
// })

// test('greeting name props', () =>{
//     render(<Greet name='Akash'/>);
//     // const testGreetProps = screen.getByText(/Hello Akash/); regex 
//     const testGreetProps = screen.getByText('Hello Akash'); // we can define string like this or use regular expression(regex) like above 
//     expect(testGreetProps).toBeInTheDocument(); 
// })


// ---------------------------------------------------------------------------------------------------------


//? Topics
//! 1] To run 'only' particular Test Case or To 'skip' particular Test Case 
//* i) only ii) skip
// test.only('greeting component test', () =>{ //todo: it will only run this Test Case and skip all other Tests Cases
// test.skip('greeting component test', () =>{ //todo: it will only skip this Test Case and run all other Test Cases

//! 2] Grouping multiple Test Cases into one Test Case Using 'describe()'
//* i) describe() 
describe('Greet', ()=>{
    test('component test', ()=>{
        render(<Greet/>);
        const testGreet = screen.getByText('Hello');
        expect(testGreet).toBeInTheDocument();
    })
    test('name props', ()=>{
            render(<Greet name='Akash'/>);
    const testGreetProps = screen.getByText('Hello Akash');  
    expect(testGreetProps).toBeInTheDocument(); 
    })
});