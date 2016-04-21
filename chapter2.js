// make the seven calls to the triangle.
for(counter = '#'; counter.length <= 7; counter += '#'){
  console.log(counter)
}

//FizzBuzz
for(i = 1; i <= 100; i++){
  if(i % 5 == 0 && i % 3 == 0){
    console.log('FizzBuzz');
  } else if(i % 3 == 0){
    console.log('Buzz');
  } else if(i % 5 == 0){
    console.log('Fizz');
  } else {
    console.log(i);
  }
}

// String representation of a chess board
var size = 8; board = '';
for(i = 1; i <= size; i++){
  for(j = 1; j <= size; j++){
    (i + j) % 2 == 0 ? board += '#' : board += ' '
  }
  board += '\n';
}
console.log(board);
