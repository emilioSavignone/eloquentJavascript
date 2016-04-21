// Minimum

function min(x, y) {
  return x > y ? y : x
}


// Recursion

function isEven(number){
  if (number == 0){
    return true;
  } else if (number == 1){
    return false;
  } else if (number < 0) {
    return isEven(-number)
  } else {
    return isEven(number - 2);
  }
}

// Bean counting

function countBs(string) {
  return countChars(string, 'B');
}

function countChars(string, char) {
  var result = 0;

  for(count = 0; count < string.length; count++){
    if (string.charAt(count) == char){
      result += 1;
    }
  }

  return result;
}
