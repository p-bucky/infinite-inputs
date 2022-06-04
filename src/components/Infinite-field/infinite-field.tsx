import React, { ChangeEventHandler } from "react";

interface IInputProps {
  name: string;
  type: string;
  onChangeCallback?: ChangeEventHandler<HTMLInputElement>;
  rowObj?: { [key: string]: string };
  index?: number;
}

export const IField = ({
  name,
  type,
  onChangeCallback,
  rowObj,
  index,
}: IInputProps) => {
  return (
    <input
      id={`${name}_${index}`}
      type={type}
      name={name}
      value={rowObj ? (rowObj[name] || "") : ""}
      onChange={onChangeCallback}
    />
  );
};
