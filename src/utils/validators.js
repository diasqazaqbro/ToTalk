export const requiredField = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLengthCreator = (maxLength) => (value) => {
  let warnLength = 'max length is ' + maxLength + ' symbols'
  if (value.length > maxLength) return warnLength;
  return undefined;
};
