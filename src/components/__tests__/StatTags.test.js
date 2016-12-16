import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import StatTags from '../StatTags';

const tags = ['tag1', 'tag2', 'tag3'];

const props = {
  tags: tags,
};


describe('<StatTags />', () => {
  it('renders a array of tags', () => {
    const component = shallow(
      <StatTags {...props} />
    );
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });
});
