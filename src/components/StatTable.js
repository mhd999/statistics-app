// @flow

import React from 'react';
import ReactTable from 'react-table';
import StatTags from './StatTags';
import RowText from './RowText';
import RowLink from './RowLink';
import RowNumber from './RowNumber';

type Props = {
  statistics: stat[],
  loading: boolean,
  classname: string,
  showPagination: boolean,
  pageSize: number,
};

const StatTable = (props: Props) => {
  
  const theadStyle = {
    background: '#d4d4d4',
    cursor: 'default',
  };
  
  const columnsList = 
  [
    {header: 'Title ↓ ↑', accessor: 'title', sortable: true, sort: 'asc', style: {width:400}, render: ({value}) => <RowText text={value} />}, 
    {header: 'Tags', accessor: 'tags', style: {width:400} , render: ({value}) => <StatTags tags={value} />}, 
    {header: 'Id', accessor: 'id',  style: {width:50, textAlign: 'center'} , render: ({value}) => <RowNumber number={value} />}, 
    {header: 'CSV', accessor: 'csvURI', style: {width:200, textAlign: 'center'}, render: ({value}) => <RowLink link={value} text='CSV' />},
    {header: 'JSON', accessor: 'jsonURI', style: {width:200, textAlign: 'center'}, render: ({value}) =><RowLink link={value} text='JSON' />} 
 ];

  return <ReactTable
    showPagination={props.showPagination}
    loading={props.loading}
    data={props.statistics}
    columns={columnsList}
    className={props.classname}
    pageSize={props.pageSize}
    theadStyle={theadStyle}/>
};

export default StatTable;