// @flow

import React from 'react';
import styler from 'react-styling';

type Props = {
    tags: string[],
};

const style = styler `
  TagStyle
    font-size: 14px
    background-color: #f2f2f2
    color: #a53d7c
    outline: none
    padding-left: 1em
    padding-right: 1em
    padding-top: 0.2em
    padding-bottom: 0.2em
    margin-top: 0.2em
    min-height: 15px
    display: inline-block
    cursor: pointer
    margin: 1px
 `;

const StatTags = (props: Props) => {

  let tagsList = props.tags.map((tag, index) => {
    return <span key={index} style={style.TagStyle}>{tag}</span>
  })
  
  return <div>{tagsList}</div>;
}

export default StatTags;