export const getFieldsRow = (inputFieldsWrapper: any) => {
  let fieldsRow = {};
  if (inputFieldsWrapper) {
    const inputFields = inputFieldsWrapper.childNodes;
    for (let i = 0; i < inputFields.length; i++) {
      if (inputFields[i].type === "text") {
        fieldsRow = {
          ...fieldsRow,
          [inputFields[i].name]: "",
        };
      }
    }
  }
  return fieldsRow;
};
