import { renderHook } from '@testing-library/react';
import { useCounter } from './UseCounter';

describe('Custom Hook Testing', () => {
    test('render useCounter hook with initial count', () => {
        const { result } = renderHook(useCounter);
        expect(result.current.count).toBe(0);
    })

    test('should accept and render the same initial count', () => {
        const { result } = renderHook(useCounter, {
            initialProps:  10
        })
        expect(result.current.count).toBe(10)
    })
})