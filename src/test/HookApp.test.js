import React from 'react';
import { shallow } from 'enzyme';
import { HooksApp } from '../HooksApp';
import '@testing-library/jest-dom';

describe('Pruebas en <HookApp/>', () => {
  test('debe mostrarse el componente ', () => {
    const wrapper = shallow(<HooksApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
