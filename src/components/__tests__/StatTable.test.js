import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import StatTable from '../StatTable';

const columnsList = [
  {header: 'key1', accessor: 'label1' },
  {header: 'key2', accessor: 'label2' },
  {header: 'key3', accessor: 'label3' },
  {header: 'key4', accessor: 'label4' },
];

const statissticList = [
  {
    "id":"1104",
    "title":"Befolkningsutvikling. Hele landet, siste kvartal",
    "datasettURI":"http://data.ssb.no/api/v0/dataset/1104/?lang=no",
    "jsonURI":"http://data.ssb.no/api/v0/dataset/1104.json?lang=no",
    "csvURI":"http://data.ssb.no/api/v0/dataset/1104.csv?lang=no",
    "tags":["01222","befolkning","befolkningsvekst","d\u00f8de","flytting","folkemengde","f\u00f8dte","innvandring","utvandring"],
    "statistic":"http://www.ssb.no/folkemengde"
 }
];

const props = {
  showPagination: false,
  loading: false,
  data: statissticList,
  columns: columnsList,
  className: 'classname',
  pageSize: statissticList.length,
};


describe('<StatTable />', () => {
  it('renders a statisstic table', () => {
    const component = shallow(
      <StatTable {...props} />
    );
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });
});
