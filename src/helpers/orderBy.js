const orderBy = (property, array, sortMethod) => {
  property = property.split(".");
  const length = property.length;
  let sortFunction = (a, b) => {
    let i = 0;
    while (i < length) {
      a = a[property[i]].toLowerCase();
      b = b[property[i]].toLowerCase();
      i++;
    }
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  };
  if (sortMethod) {
    sortFunction = sortMethod;
  }
  array.sort(sortFunction);
  return array;
};
export default orderBy;
