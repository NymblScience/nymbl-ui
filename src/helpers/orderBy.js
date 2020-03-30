function orderBy(property, array, sortMethod) {
  property = property.split(".");
  const length = property.length;
  const defaultSort = (a, b) => {
    let i = 0;
    while (i < length) {
      a = a[property[i]].toString().toLowerCase();
      b = b[property[i]].toString().toLowerCase();

      i++;
    }
    console.log(a, b);
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  };
  if (!sortMethod) {
    array.sort(defaultSort);
  } else {
    array.sort(sortMethod);
  }

  return array;
}
export default orderBy;
