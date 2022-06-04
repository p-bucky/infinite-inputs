import React, { useState, useEffect, ReactNode } from "react";
import { getFieldsRow } from "../helper";

const INFINITE_INPUT_WRAPPER_CONSTANT = "infinite-input-wrapper";

export interface InfiniteInputProps {
  fieldsValue: Array<{ [key: string]: string }>;
  onChange: Function;
  children: ReactNode;
}

export const InfiniteInput = ({
  fieldsValue,
  onChange,
  children,
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
                      })}
                    </>
                  );
                }
              })}
              <button onClick={() => handleRemoveRow(i)}>Remove</button>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      {form()}
      <button onClick={handleAddRow}>Add</button>
    </>
  );
};
