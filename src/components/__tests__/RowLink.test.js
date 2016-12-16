import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import RowLink from '../RowLink';

describe('<RowLink />', () => {
  it('renders a link', () => {
    const component = shallow(
      <RowLink link='http://localhost:80' text='new page'/>
    );
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });
});
