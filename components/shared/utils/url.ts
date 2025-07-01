export const getSearchTermFromUrl = (value?: string | string[]) => {
  if (!value) return "";
  if (Array.isArray(value)) return value[0] || "";

  return value;
};
