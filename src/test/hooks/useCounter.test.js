const { renderHook } = require('@testing-library/react-hooks');
const { useCountrer } = require('../../hooks/useCounter');

describe('Pruebas en useCounter', () => {
  test('debe retornar valores por defecto', () => {
    const { result } = renderHook(() => useCountrer());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });
});
