//! Alternative method Of Testing
//todo: if create file inside [ __tests__ ] folder without testing extensions it will also act as testing files.

import { render, screen } from '@testing-library/react';
import Greet from '../components/greet/Greet';

test('greeting component test', () =>{
    render(<Greet/>);
    const testGreet = screen.getByText(/hello/i); // i - is for testing with string Case-insensitive 
    expect(testGreet).toBeInTheDocument();
})

test('greeting name props', () =>{
    render(<Greet name='Akash'/>);
    // const testGreetProps = screen.getByText(/Hello Akash/); //regex 
    const testGreetProps = screen.getByText('Hello Akash'); //string
    expect(testGreetProps).toBeInTheDocument(); 
})
