import React, { ChangeEventHandler, CSSProperties } from "react";

interface IInputProps {
  name: string;
  type: string;
  onChangeCallback?: ChangeEventHandler<HTMLInputElement>;
  rowObj?: { [key: string]: string };
  index?: number;
  classes?: {
    addbtnClass: string;
    removebtnClass: string;
    inputClass: string;
    containerClass: string;
  };
  styles?: {
    addbtnStyle: CSSProperties | undefined;
    removebtnStyle: CSSProperties | undefined;
    inputStyle: CSSProperties | undefined;
    containerStyle: CSSProperties | undefined;
  };
}

export const IField = ({
  name,
  type,
  onChangeCallback,
  rowObj,
  index,
  classes,
  styles,
}: IInputProps) => {
  return (
    <input
      id={`${name}_${index}`}
      type={type}
      name={name}
      value={rowObj ? rowObj[name] || "" : ""}
      onChange={onChangeCallback}
      className={classes?.inputClass}
      style={styles?.inputStyle}
    />
  );
};
