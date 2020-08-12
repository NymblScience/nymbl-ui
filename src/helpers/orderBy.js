const sortBy = require('lodash/sortBy');

function orderBy(property, array, sortMethod) {
  let sortedArray;
  if (!sortMethod) {
    sortedArray = sortBy(array, property);
  } else {
    sortedArray = array.sort(sortMethod);
  }

  return sortedArray;
}
export default orderBy;
