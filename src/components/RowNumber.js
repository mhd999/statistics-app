// @flow

import React from 'react';
import styler from 'react-styling';

type Props = {
    number: number,
};

const style = styler `
  TextStyle
    font-size: 12px
    color: #000000
 `;
const RowNumber = (props: Props) => (
  <span style={style.TextStyle}>{props.number}</span>
);

export default RowNumber;