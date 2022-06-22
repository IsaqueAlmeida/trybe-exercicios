function myRemove (arr, item) {
  let arrnew = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      arrnew.push(arr[index]);
    };
  };
  return arrnew;
};

module.exports = myRemove;