import { act, renderHook } from '@testing-library/react';
import { useCounter } from './UseCounter';

describe('Custom Hook Testing', () => {
    test('render useCounter hook with initial count', () => {
        const { result } = renderHook(useCounter);
        expect(result.current.count).toBe(0);
    })

    test('should accept and render the same initial count', () => {
        const { result } = renderHook(useCounter, {
            initialProps: 10
        })
        expect(result.current.count).toBe(10)
    })
    test('should increment the count', () => {
        const { result } = renderHook(useCounter);
        // const increment = () => setCount(count+1); code

        // result.current.increment(); // if call method like this it was not going the perform or update the count ; to perform the assert on the output we should have to use act()
        //todo: act()
        // act(() => {
        //     /* fire events that update state */
        //   });
        //   /* assert on the output */
        act(() => result.current.increment());
        expect(result.current.count).toBe(1)
    })

    test('should decrement the count', () => {
        const { result } = renderHook(useCounter);
        // const decrement = () => setCount(count-1); code
        act(() => result.current.decrement());
        expect(result.current.count).toBe(-1)
    })
})