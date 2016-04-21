// Vector constructors

function Vector(x,y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vector) {
  return new Vector(this.x + vector.x, this.y + vector.y)
}

Vector.prototype.minus = function(vector) {
  return new Vector(this.x - vector.x, this.y - vector.y)
}

Object.defineProperty(Vector.prototype, 'length', {
  get: function(){
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }
})


// StretchCell

function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
};


StretchCell.prototype.minWidth = function(){
  return Math.max(this.width, this.inner.minWidth());
};

StretchCell.prototype.minHeight = function(){
  return Math.max(this.height, this.inner.minHeight());
};


StretchCell.prototype.draw = function(width, height){
  return this.inner.draw(width, height)
};

// Sequence Interface

function SequenceInterface(sequence){
  this.sequence = sequence
  this.position = 0;
  this.final = sequence.length - 1;
  this.elementAtPosition = sequence[position];

  this.next = function(){
    if(position == final){
      return false
    } else {
    positon += 1;
    return true
    }
  }
}

function logFive(sequence){
  for(var i = 0; i <  5; i++){
    if(!sequence.next()){
      break;
    }
    console.log(sequence.current)
  }
}

function ArraySeq(array){
  this.position = -1;
  this.array = array;
}

ArraySeq.prototype.next = function(){
  if(this.position >= this.array.length - 1)
    return false;

  this.position++;
  return true
}

ArraySeq.prototype.current = function(){
  return this.array[this.position];
}

function RangeSeq(from, to){
  this.position = from - 1;
  this.to = to
}

RangeSeq.prototype.next = function(){
  if(this.position >= this.to)
    return false;
  this.position++;
  return true
}

RangeSeq.prototype.current = function(){
  return this.position;
}

