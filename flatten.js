const flatten = function(array) {
  let flatArray = [];

  for (let item of array) {
    if (Array.isArray(item)) {
      for (let subItem of item) {
        flatArray.push(subItem);
      }
    } else {
      flatArray.push(item);
    }
  }

  return flatArray;
};

module.exports = flatten;
