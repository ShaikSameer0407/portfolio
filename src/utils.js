export const getImageUrl = (path) => {
  return new URL(`${path}`, import.meta.url).href;
};
