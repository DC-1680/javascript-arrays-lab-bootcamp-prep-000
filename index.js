const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(){
  kittens.push("Ralph");
}

function destructivelyPrependKitten(){
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(){
  var appendKitten = (kittens.push("Ralph");
  return appendKitten;
}
/*
appendKitten(name)
prependKitten(name)
removeLastKitten()
removeFirstKitten
*/
