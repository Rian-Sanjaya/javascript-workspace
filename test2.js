var arr = []
for (var i=0; i<10; i++) {
  var f = function(i) {
    return function() {
      console.log(i)
    }
  }(i)

  arr.push(f)
}
console.log(arr)

for (var j=1; j<arr.length; j++) {
  if (arr[j] != arr[j-1]) {
    arr[j]()
  }
}
