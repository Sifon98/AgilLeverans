export const getParams = (location) => {
  const params = new URLSearchParams(location.search);
  const color = params.get("color");
  const size = params.get("size");
  return { color, size };
}

export const getIsParamsValid = (color, size, product) => {
  const isColorValid = product.colors.some(col => col.name === color);
  const hex = isColorValid ? product.colors.find(col => col.name === color).hex : null;
  const isSizeValid = product.sizes.includes(size);
  return { isColorValid, hex, isSizeValid };
}

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
} 