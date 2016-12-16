import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import RowNumber from '../RowNumber';

describe('<RowNumber />', () => {
  it('renders a number', () => {
    const component = shallow(
      <RowNumber number={123} />
    );
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });
});
