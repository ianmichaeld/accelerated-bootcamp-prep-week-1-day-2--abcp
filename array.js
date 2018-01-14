function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
  var a = [element, ...array];
  return a;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var a = [...array, element];
  return a;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;

}

function removeElementFromBeginningOfArray(array) {
  var a = [...array];
  a.shift();
  return a;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var a = [...array];
  a.pop();
  return a;

}
