// Sum and Range

function range(start, end, step) {
  var array = [];
  if (step == undefined){
    step = 1;
  }

  for(number = start; step > 0 ? number <= end : number >= end; number += step){
    array.push(number);
  }
  return array;
}

function sum(array){
  var total = 0;

  for(count = 0; count < array.length; count++){
    total += array[count];
  }
  return total;
}

// Reversing Arrays

function reverseArray(array){
  var newArray = []
  for(index = 0; index < array.length; index++){
    newArray.unshift(array[index]);
  }
  return newArray;
}

function reverseArrayInPlace(array){
  for(index = 0; index < Math.floor(array.length / 2); index++){
    var element = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = element;
  }
  return array;
}

// Array to List && List to Array

function arrayToList(array){
  var list = null;

  for(var index = array.length - 1; index >= 0; index--){
    list = { value: array[index], rest: list }
  }
  return list;
}

function listToArray(list){
  var array = [];

  while (list != null){
    array.push(list.value);
    list = list.rest
  }
  return array;
}

function prepend(element, list){
  return { value: element, rest: list };
}

function nth(list, number) {
  if (!list){
    return undefined;
  } else if(n == 0){
    return list.value;
  } else {
    return nth(list.rest, number - 1);
  }
}

// Deep Comparison

function deepEqual(value1, value2) {
  if (value1 === value2) { return true; }

  if ( value1 == null || typeof value1 != 'object'
    || value2 == null || typeof value2 != 'object'){
    return false;
  }

  var propsInValue1 0, propsInValue2 = 0;

  for (var prop in value1){
    propsInValue1 += 1;
  }

  for(var prop in value2){
    propsInValue2 += 1;
    if (!(prop in value1) || !deepEqual(value1[prop], value2[prop])){
      return false;
    }
  }
  return propsInValue1 == propsInValue2;
}



