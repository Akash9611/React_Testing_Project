//! [ .spec.js] is a alternative file extension to testing file like .test.js //we can use any of the one extensions for testing.

import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('greeting component test', () => {
    render(<Greet />);
    const testGreet = screen.getByText(/hello/i); // i - is for testing with string Case-insensitive 
    expect(testGreet).toBeInTheDocument();
})

test('greeting name props', () => {
    render(<Greet name='Akash' />);
    // const testGreetProps = screen.getByText(/Hello Akash/i); //regex to match substrings- if we write only hello it will match successfully
    // const testGreetProps = screen.getByText(/^Hello Akash$/i); //regex to match full strings 
    const testGreetProps = screen.getByText('Hello Akash'); //string
    expect(testGreetProps).toBeInTheDocument();
})
