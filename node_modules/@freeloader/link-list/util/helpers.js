const hasOwnProp = function(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};


const noop = function() {};


const objToStr = function objToStr(obj) {
  if (typeof(obj) !== 'object') {
    return obj;
  }

  let outputStr = '{ ';
  for (let eachKey in obj) {
    outputStr += eachKey;
    outputStr += ': ';
    outputStr += objToStr(obj[eachKey]);
    outputStr += ', ';
  }
  outputStr += '}'
  return outputStr;
};


export {
  hasOwnProp,
  noop,
  objToStr,
};
