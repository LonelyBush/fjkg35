export const validateOptions = (
  formValues: Record<string, FormDataEntryValue>,
) => {
  return Object.values(formValues).every((val) => +val >= 0);
};
