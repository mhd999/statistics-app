import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import RowText from '../RowText';

describe('<RowText />', () => {
  it('renders a text', () => {
    const component = shallow(
      <RowText text='hello world' />
    );
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });
});
