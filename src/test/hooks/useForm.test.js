const { renderHook, act } = require('@testing-library/react-hooks');
const { useForm } = require('../../hooks/useForm');

describe('Pruebas en useForm', () => {
  const initialState = {
    name: 'daniel',
    email: 'danielislas3@live.com',
  };

  test('debe de regresar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialState));
    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toEqual(initialState);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('debe de cambiar el valor del formulario', () => {
    const { result } = renderHook(() => useForm(initialState));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Pedrito',
        },
      });
    });

    const [formValues] = result.current;
    console.log(formValues);
    expect(formValues).toEqual({ ...initialState, name: 'Pedrito' });
  });
});
