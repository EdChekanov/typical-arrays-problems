
exports.min = function min(array) {
  if (array == undefined || array.length == 0) {
    return 0;
  };
  let min = array[0];
  let i = 1;
  while (i < array.length) {
    if (min > array[i]) {
      min = array[i];
      i++;
    } else {
      i++;
    };
  };
  return min;
};

exports.max = function max(array) {
  if (array == undefined || array.length == 0) {
    return 0;
  };
  let max = array[0];
  let i = 1;
  while (i < array.length) {
    if (max < array[i]) {
      max = array[i];
      i++;
    } else {
      i++;
    };
  };
  return max;
};

exports.avg = function avg(array) {
  if (array == undefined || array.length == 0) {
    return 0;
  };
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum = sum + array[i];
    i++;
  };
  let avg = (sum / array.length);
  return avg;
};
