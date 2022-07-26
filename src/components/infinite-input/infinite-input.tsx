import React, { useState, useEffect, ReactNode, CSSProperties } from "react";
import { getFieldsRow } from "../helper";

const INFINITE_INPUT_WRAPPER_CONSTANT = "infinite-input-wrapper";

export interface InfiniteInputProps {
  fieldsValue: Array<{ [key: string]: string }>;
  onChange: Function;
  children: ReactNode;
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

export const InfiniteInput = ({
  fieldsValue,
  onChange,
  children,
  classes,
  styles,
}: InfiniteInputProps) => {
  const [values, setValues] = useState<Array<{ [key: string]: string }>>([]);

  useEffect(() => {
    setValues(fieldsValue);
  }, []);

  useEffect(() => {
    onChange(values);
  }, [values]);

  const inputFieldsWrapper = document.getElementById(
    INFINITE_INPUT_WRAPPER_CONSTANT
  );

  const handleOnChangeFieldValue = (e: any) => {
    const { id, value, name } = e.target;
    const index = id.split("_")[1];
    let _values = JSON.parse(JSON.stringify(values));
    _values[index] = { ..._values[index], [name]: value };
    setValues(_values);
  };

  const newFieldsRow = getFieldsRow(inputFieldsWrapper);

  const handleAddRow = () => {
    setValues([...values, newFieldsRow]);
  };

  const handleRemoveRow = (i: number) => {
    const valuesAfterRemove = values.filter(
      (item: { [key: string]: string }, index: number) => i !== index
    );
    setValues(valuesAfterRemove);
  };

  const form = () => {
    return (
      <>
        {(values || []).map((item: { [key: string]: string }, i: number) => {
          return (
            <div
              className={classes?.containerClass}
              style={styles?.containerStyle}
              id={
                i === 0
                  ? INFINITE_INPUT_WRAPPER_CONSTANT
                  : `${INFINITE_INPUT_WRAPPER_CONSTANT}_${i}`
              }
              key={i}
            >
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                  return (
                    <>
                      {React.cloneElement(child as React.ReactElement<any>, {
                        onChangeCallback: handleOnChangeFieldValue,
                        rowObj: item,
                        index: i,
                        styles,
                        classes,
                      })}
                    </>
                  );
                }
              })}
              <button
                className={classes?.removebtnClass}
                style={styles?.removebtnStyle}
                onClick={() => handleRemoveRow(i)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      {form()}
      <button
        className={classes?.addbtnClass}
        style={styles?.addbtnStyle}
        onClick={handleAddRow}
      >
        Add
      </button>
    </>
  );
};
