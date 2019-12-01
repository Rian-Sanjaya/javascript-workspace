function map (array, func) {
  var result = []
  for (var i=0; i<array.length; i++) {
    result.push(func(array[i]))
  }
  return result
}

function questionable (func) {
  return function (array) {
    return map(array, func)
  }
}


g = function(x) {return x*x}
f = questionable(g)
console.log(f([1,2,3]))