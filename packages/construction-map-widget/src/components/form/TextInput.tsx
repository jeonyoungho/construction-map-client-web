// Created by jyh on 2022-03-28
import React, { ChangeEventHandler, useCallback } from 'react';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<Props> = ({value, onChange}) => {

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <>
      <div>TextInput</div>
      <input value={value} onChange={handleValueChange}/>
    </>
  );

};
