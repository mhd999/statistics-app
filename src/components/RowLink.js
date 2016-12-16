// @flow

import React from 'react';
import styler from 'react-styling';

type Props = {
    link: string,
    text: string
};

const style = styler `
  LinkStyle
    font-size: 12px
    color: #000000
    text-decoration: underline
`;

const RowLink = (props: Props) => (
  <a href={props.link} target="_blank" style={style.LinkStyle}>{props.text}</a>
);

export default RowLink;