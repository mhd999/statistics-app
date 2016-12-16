// @flow

import React from 'react';
import styler from 'react-styling';

type Props = {
    text: string,
};

const style = styler `
  TextStyle
    font-size: 12px
    color: #000000
    text-decoration: underline
 `;
const RowText = (props: Props) => (
  <span style={style.TextStyle}>{props.text}</span>
);

export default RowText;