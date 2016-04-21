// Flattening Array of arrays.

var array = [['r','a'],['m','o','n']]
console.log(array.reduce(function(flat, current){
  return flat.concat(current);
}, []));


// Mother Child Age difference.

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function mothersAgeAtBirth(person){
  return person.born - byName[person.mother].born
};

function hasMom(person){
  return byName[person.mother] != null
}

var arrayOfDifference = ancestry.filter(hasMom).map(mothersAgeAtBirth);
console.log(average(arrayOfDifference));

// Historical life Expectancy
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

byCentury = {}
ancestry.forEach(function(person){
  century = Math.ceil(person.died / 100)
  age = person.died - person.born
  if (century in byCentury){
    byCentury[century].push(age)
  } else {
    byCentury[century] = [age]
  }
})

for (century in byCentury){
  console.log(century + ':' + average(byCentury[century]));
}

// Every and then some

function every(array, predicate){
  for(var i = 0; i < array.length; i++){
    if (!predicate(array[i])) {
      return false
    }
  }
  return true;
};

function some(array, predicate){
  for(var i = 0; i < array.length; i++){
    if(predicate(array[i])) {
      return true;
    }
  }
  return false;
};
