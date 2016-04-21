var board = "", size = 8, row = "";

for(var rowCounter = 0; rowCounter < size; rowCounter++) {
  if (rowCounter % 2 == 0)
    row += "#"
  else
    row += " "
}

console.log("This is the row: " + row)
console.log("the row lenght is: " + String(row.length))
console.log(row.replace("#", " "));

row += "\n";

for(var counter = 0; counter < size; counter++) {
  if (counter % 2 == 0)
    board += row
  else
    board += row.replace("#", " ")


 // Example of a recursive function.

 function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + ”5)") || find(start * 3, "(" + history + "* 3)");
  }
  return find(1, "1");
}

function min(number1, number2) {
  if (number1 > number2)
    return number2;
  else
    return number1;
}

function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);

function countBs(string) {
  var charCount = 0;
  for(var counter = 0; counter < string.length; counter++){
    if (string.charAt(counter) == "B")
      charCount++
  }
  return charCount;
}

function countChar(string, char) {
  var charCount = 0;
  for(var counter =0; counter < string.length; counter++) {
    if(string.charAt(counter) == char)
      charCount++
  }
  return charCount;
}
