import React from 'react';
import style from './Text.module.css';

interface Props {
  children: string;
  textAlign?: string;
  marginBottom?: string;
}

const Text = ({ children, textAlign = '', marginBottom = '0' }: Props) => {
  return (
    <p
      className={[
        style['text'],
        style[textAlign],
        style[`marginBottom${marginBottom}`],
      ].join(' ')}
    >
      {children}
    </p>
  );
};

export default Text;
