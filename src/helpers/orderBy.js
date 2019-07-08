function orderBy(property, array) {
  property = property.split(".");
  const length = property.length;
  array.sort((a, b) => {
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
  });
  return array;
}
export default orderBy;
